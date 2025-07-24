"use client";

import { Amplify } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateClient } from "aws-amplify/api";
import { generateExerciseMedia } from "@/graphql/mutations";
import type { GenerateExerciseMediaMutation } from "@/API";
import config from "../../../../../../amplifyconfiguration.json";

Amplify.configure(config);
const client = generateClient();

export default function CustomExercise(props: {
  params: Promise<{ id: string }>;
}) {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [jobError, setJobError] = useState("");
  const [id, setId] = useState<string>("");
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  // Resolve patient ID
  useEffect(() => {
    props.params.then(({ id }) => setId(id));
  }, [props.params]);

  // Generate video
  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    setJobError("");
    setVideoUrl("");

    try {
      const result = await client.graphql<GenerateExerciseMediaMutation>({
        query: generateExerciseMedia,
        variables: { prompt },
      });

      if ("data" in result && result.data?.generateExerciseMedia) {
        const { jobId, error } = result.data.generateExerciseMedia;

        if (error) {
          setJobError(error);
          setIsGenerating(false);
        } else if (jobId) {
          console.log("[Polling] Video generation started with jobId:", jobId);
          pollForVideo(jobId);
        }
      } else {
        setJobError("Unexpected response structure.");
        setIsGenerating(false);
      }
    } catch (err) {
      console.error("Error generating exercise media:", err);
      setJobError("Failed to generate video. Please try again.");
      setIsGenerating(false);
    }
  };

  // Polling logic
  const pollForVideo = async (jobId: string) => {
    const maxAttempts = 30;
    const delay = 20000;
    let attempts = 0;

    const checkStatus = async () => {
      try {
        const response = await client.graphql({
          query: /* GraphQL */ `
            query GetVideoJob($id: ID!) {
              getVideoJob(id: $id) {
                id
                videoUrl
                status
                updated_at
              }
            }
          `,
          variables: { id: jobId },
        });

        const job = (response as any).data?.getVideoJob;
        console.log(`[Polling] Attempt ${attempts + 1}:`, job);

        if (job?.videoUrl) {
          console.log("[Polling] Video ready:", job.videoUrl);
          setVideoUrl(job.videoUrl);
          setIsGenerating(false);
          return;
        }

        if (++attempts < maxAttempts) {
          setTimeout(checkStatus, delay);
        } else {
          console.warn("[Polling] Max attempts reached. No video found.");
          setJobError("Video generation timed out. Please try again later.");
          setIsGenerating(false);
        }
      } catch (error) {
        console.error("[Polling] Error checking video status:", error);
        setJobError("Failed to check video job status.");
        setIsGenerating(false);
      }
    };

    checkStatus();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{name}</h1>
            <p className="text-sm text-gray-600">Admission Number: {id}</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="bg-white border-gray-200 px-6 py-4 flex-shrink-0">
        <h1 className="text-ml font-semibold text-gray-900">Custom Exercise</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Video Card */}
          <div className="max-w-2xl mb-6 border border-gray-300 rounded-lg bg-gray-100 p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Video Preview
            </h2>
            <div className="w-full aspect-video bg-white rounded-md border border-gray-200 flex items-center justify-center overflow-hidden">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-gray-500 text-sm">
                  {isGenerating
                    ? "Waiting for video generation..."
                    : "No video generated yet."}
                </p>
              )}
            </div>
            {jobError && (
              <p className="text-sm text-red-600 mt-2">{jobError}</p>
            )}
          </div>

          {/* Prompt Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe the exercise
            </label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Standing hamstring stretch with band"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-black"
            />
          </div>

          {/* Generate Button */}
          <div className="mb-8">
            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className={`px-4 py-2 text-white rounded-md text-sm font-medium ${
                !prompt || isGenerating
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isGenerating ? "Generating..." : "Generate Video"}
            </button>
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="px-6 py-4 flex justify-between">
          <Link
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            href={`/dashboard/patients/${id}/exerciseDetails${
              name ? `?name=${encodeURIComponent(name)}` : ""
            }`}
          >
            Previous
          </Link>
          <Link
            href={`/dashboard/patients/${id}/exerciseDetails/customExercise/createExercise${
              name ? `?name=${encodeURIComponent(name)}` : ""
            }${videoUrl ? `&videoUrl=${encodeURIComponent(videoUrl)}` : ""}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
