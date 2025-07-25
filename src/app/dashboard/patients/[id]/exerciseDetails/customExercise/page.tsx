"use client";

import { Amplify } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateClient } from "aws-amplify/api";
import { generateExerciseMedia } from "@/graphql/mutations";
import type { GenerateExerciseMediaMutation } from "@/API";
import config from "../../../../../../amplifyconfiguration.json";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

Amplify.configure(config);
const client = generateClient();

export default function CustomExercise(props: {
  params: Promise<{ id: string }>;
}) {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [s3Key, setS3Key] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [jobError, setJobError] = useState("");
  const [focusSide, setFocusSide] = useState("Right");
  const [exerciseView, setExerciseView] = useState("Front View");
  const [id, setId] = useState<string>("");
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    props.params.then(({ id }) => setId(id));
  }, [props.params]);

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    setJobError("");
    setVideoUrl("");
    setS3Key("");

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
                s3Key
                status
                prompt
                updated_at
              }
            }
          `,
          variables: { id: jobId },
        });

        const job = (response as any).data?.getVideoJob;

        if (job?.videoUrl) {
          setVideoUrl(job.videoUrl);
          setS3Key(job.s3Key ?? "");
          setIsGenerating(false);
          return;
        }

        if (++attempts < maxAttempts) {
          setTimeout(checkStatus, delay);
        } else {
          setJobError("Video generation timed out. Please try again later.");
          setIsGenerating(false);
        }
      } catch (error) {
        console.error("Polling error:", error);
        setJobError("Failed to check video job status.");
        setIsGenerating(false);
      }
    };

    checkStatus();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Exercise Design Studio</h1>

          {/* Progress Steps */}
          <div className="flex items-center mt-6 space-x-8">
            {/* Step 1 - Active */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#005DA4] text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-[#005DA4]">Video Upload & Prompt</p>
                <p className="text-xs text-gray-500">Upload a video and enter a prompt.</p>
              </div>
            </div>

            {/* Step 2 - Inactive */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
                <VisibilityOutlinedIcon />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Preview Video</p>
                <p className="text-xs text-gray-500">Review and edit the generated video.</p>
              </div>
            </div>

            {/* Step 3 - Inactive */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
                <TopicOutlinedIcon />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Exercise Details</p>
                <p className="text-xs text-gray-500">Add target areas and equipment.</p>
              </div>
            </div>

            {/* Step 4 - Inactive */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
                <SaveOutlinedIcon />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Review & Save</p>
                <p className="text-xs text-gray-500">Preview and save the exercise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Upload & Describe Your Exercise</h2>
            <p className="text-gray-600">Help us understand your exercise with a sample video and a short description.</p>
          </div>

          {/* Video Preview Section */}
          {(videoUrl || isGenerating) && (
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Generated Video Preview
              </label>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <div className="w-full aspect-video bg-black rounded-md overflow-hidden flex items-center justify-center">
                  {videoUrl ? (
                    <video
                      src={videoUrl}
                      controls
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="flex flex-col items-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                      <p className="text-white text-lg">Generating video...</p>
                      <p className="text-gray-300 text-sm mt-2">This may take a few minutes</p>
                    </div>
                  )}
                </div>
                {jobError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm">{jobError}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Exercise Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is the exercise about? Include target area, movement, and goal. <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="e.g. Standing hamstring stretch with band - targets posterior thigh muscles to improve flexibility and reduce tension"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>

          {/* Side Focus and Exercise View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which side does the exercise focus on? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-3">
                {["Right", "Left", "Both"].map((side) => (
                  <button
                    key={side}
                    onClick={() => setFocusSide(side)}
                    className={`px-4 py-2 text-sm font-medium rounded-md border ${focusSide === side
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {side}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose exercise view <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-3">
                {["Front View", "Side View", "Detail View"].map((view) => (
                  <button
                    key={view}
                    onClick={() => setExerciseView(view)}
                    className={`px-4 py-2 text-sm font-medium rounded-md border ${exerciseView === view
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className={`px-6 py-3 font-medium rounded-md flex items-center ${!prompt || isGenerating
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isGenerating ? "Generating..." : "Generate Exercise"}
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <Link
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 border border-gray-300"
              href={`/dashboard/patients/${id}/exerciseDetails${name ? `?name=${encodeURIComponent(name)}` : ""
                }`}
            >
              ← Previous
            </Link>
            <Link
              href={`/dashboard/patients/${id}/exerciseDetails/customExercise/createExercise${name ? `?name=${encodeURIComponent(name)}` : ""
                }${videoUrl ? `&videoUrl=${encodeURIComponent(videoUrl)}` : ""}${prompt ? `&prompt=${encodeURIComponent(prompt)}` : ""
                }${s3Key ? `&s3Key=${encodeURIComponent(s3Key)}` : ""}`}
              className={`px-6 py-2 rounded-md text-sm font-medium ${videoUrl
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Next →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}