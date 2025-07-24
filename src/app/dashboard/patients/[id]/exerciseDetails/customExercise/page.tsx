'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CustomExercise(props: { params: Promise<{ id: string }> }) {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const params = React.use(props.params);
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const id = params.id;

  const handleGenerate = () => {
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with real generated video URL
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900"> {name}</h1>
            <p className="text-sm text-gray-600">Admission Number: {id}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-gray-200 px-6 py-4 flex-shrink-0">
        <h1 className="text-ml font-semibold text-gray-900">Custom Exercise</h1>
      </div>

      {/* Content & Actions */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Scrollable Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Video Preview Card (Resized) */}
          <div className="max-w-2xl mb-6 border border-gray-300 rounded-lg bg-gray-100 p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Video Preview</h2>
            <div className="w-full aspect-video bg-white rounded-md border border-gray-200 flex items-center justify-center overflow-hidden">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-gray-500 text-sm">
                  {isGenerating ? 'Generating video...' : 'No video generated yet.'}
                </p>
              )}
            </div>
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
          <div className='mb-8'>
            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className={`px-4 py-2 text-white rounded-md text-sm font-medium ${
                !prompt || isGenerating
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isGenerating ? 'Generating...' : 'Generate Video'}
            </button>
          </div>
        </div>

        {/* Footer with Nav buttons*/}
            <div className="px-6 py-4 flex justify-between">
                <Link
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                    href={`/dashboard/patients/${id}/exerciseDetails${name ? `?name=${encodeURIComponent(name)}` : ''}`}
                >
                    Previous
                </Link>
                <Link 
                        href={`/dashboard/patients/${id}/exerciseDetails/customExercise/createExercise${name ? `?name=${encodeURIComponent(name)}` : ''}${videoUrl ? `&videoUrl=${encodeURIComponent(videoUrl)}` : ''}`}
                        className='px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700'
                    >
                        Next
                </Link>
            </div>
        </div>
    </div>
  );
}
