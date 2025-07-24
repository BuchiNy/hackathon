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
        alert("Exercise saved to library!");
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
        <h1 className="text-ml font-semibold text-gray-900">
          Exercise Details
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-1 px-6 py-4 gap-6">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            placeholder="Exercise Name"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            className="px-3 py-2 text-black border rounded"
          />
          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 text-black border rounded"
          />
          <input
            placeholder="Body Part"
            value={bodyPart}
            onChange={(e) => setBodyPart(e.target.value)}
            className="px-3 py-2 text-black border rounded"
          />
          <input
            placeholder="Equipment"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="px-3 py-2 text-black border rounded"
          />
          <textarea
            placeholder="About"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="px-3 py-2 text-black border rounded h-24"
          />
          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
        </div>

        {/* Video Preview */}
        <div className="flex-1">
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Exercise Preview
          </h2>
          <div className="w-full aspect-video bg-gray-100 rounded-md border flex items-center justify-center">
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <p className="text-gray-500">No video loaded.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex justify-between">
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          href={`/dashboard/patients/${id}/exerciseDetails/customExercise${
            name ? `?name=${encodeURIComponent(name)}` : ""
          }`}
        >
          Previous
        </Link>
        <div className="flex gap-2">
          <button
            onClick={handleSaveToLibrary}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save to Library"}
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Save Exercise
          </button>
        </div>
      </div>
    </div>
  );
}
