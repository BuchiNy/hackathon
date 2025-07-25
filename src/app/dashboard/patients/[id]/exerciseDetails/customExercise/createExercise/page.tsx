"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateClient } from "aws-amplify/api";
import { createExercise } from "@/graphql/mutations";
import type {
  CreateExerciseMutation,
  CreateExerciseMutationVariables,
} from "@/API";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useRouter } from "next/navigation";


const client = generateClient();

export default function CreateExercise(props: {
  params: Promise<{ id: string }>;
}) {
  const [exerciseName, setExerciseName] = useState("");
  const [category, setCategory] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const params = React.use(props.params);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const prompt = searchParams.get("prompt");
  const videoUrl = searchParams.get("videoUrl");
  const s3Key = searchParams.get("s3Key");
  const id = params.id;

  const router = useRouter();


  const handleSaveToLibrary = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const input: CreateExerciseMutationVariables["input"] = {
        title: exerciseName,
        category,
        description: about,
        targetBodyParts: [bodyPart],
        equipment: equipment ? [equipment] : [],
        s3Key: s3Key || "",
        prompt: prompt || "",
        duration: 30,
        reps: 10,
        sets: 3,
        weight: 0,
      };

      const result = await client.graphql<CreateExerciseMutation>({
        query: createExercise,
        variables: { input },
      });

      if ("data" in result && result.data?.createExercise?.id) {
        const id = result.data.createExercise.id;
        router.push(`/dashboard/patients/${id}/exerciseDetails${name ? `?name=${encodeURIComponent(name)}` : ""}`);
      } else {
        setErrorMsg("Failed to save exercise. Please try again.");
      }
    } catch (err) {
      console.error("Save to library failed:", err);
      setErrorMsg("An error occurred. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Exercise Design Studio</h1>

          {/* Progress Steps */}
          <div className="flex items-center mt-6 space-x-8">
            {/* Step 1 - Completed */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-md font-bold text-green-600">Video Upload & Prompt</p>
                <p className="text-xs text-gray-500">Upload a video and enter a prompt.</p>
              </div>
            </div>

            {/* Step 2 - Completed */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full">
                <VisibilityOutlinedIcon />
              </div>
              <div className="ml-3">
                <p className="text-md  font-bold text-green-600">Preview Video</p>
                <p className="text-xs text-gray-500">Review and edit the generated video.</p>
              </div>
            </div>

            {/* Step 3 - Active */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-[#005DA4] text-white rounded-full">
                <TopicOutlinedIcon className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="text-md font-bold text-[#005DA4]">Exercise Details</p>
                <p className="text-xs text-gray-500">Add target areas and equipment.</p>
              </div>
            </div>

            {/* Step 4 - Inactive */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
                <SaveOutlinedIcon className="w-5 h-5" />
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
          <div className="mb-8 flex justify-between items-start">
            {/* Left Side: Title and Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Exercise Details</h2>
              <p className="text-gray-400">Add target area and equipment.</p>
            </div>

            {/* Right Side: Auto Fill Button */}
            <button className="px-4 py-2 bg-[#005DA4] text-white rounded-md text-sm font-medium hover:bg-blue-700">
              <AutoAwesomeIcon className="mr-2" />
              Auto Fill
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Preview Section */}
            <div>
              <div className="mb-6">
                <div className="h-auto rounded-lg">
                  <div className="w-90 h-90 aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
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
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                        <p className="text-white text-lg">No video available</p>
                        <p className="text-gray-300 text-sm mt-2">Upload a video in the previous step</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div className="mb-6">
                <div className="space-y-6">
                  {/* Exercise Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Exercise Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="e.g., Resistance Band Rows"
                      value={exerciseName}
                      onChange={(e) => setExerciseName(e.target.value)}
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Target Region */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Region <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="e.g., Upper Body, Core"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Muscle Groups */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Muscle Groups <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="e.g., Back, Arms"
                      value={bodyPart}
                      onChange={(e) => setBodyPart(e.target.value)}
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Equipment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Equipment <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="e.g., Resistance Band"
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* About */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="e.g., Strengthen back and improve posture with resistance band exercises."
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                </div>
              )}
            </div>

          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200 mt-8">
            <Link
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 border border-gray-300"
              href={`/dashboard/patients/${id}/exerciseDetails/customExercise${name ? `?name=${encodeURIComponent(name)}` : ""}`}
            >
              ← Previous
            </Link>
            <div className="flex gap-3">
              <button
                onClick={handleSaveToLibrary}
                disabled={loading}
                className={`px-6 py-2 rounded-md text-sm font-medium flex items-center ${loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                <SaveOutlinedIcon className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Save to Library"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}