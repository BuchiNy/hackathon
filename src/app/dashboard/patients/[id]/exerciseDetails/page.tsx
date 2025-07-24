'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ExerciseCard from '../../../libs/components/exerciseCard';

const mockExercises = Array.from({ length: 5 }, (_, i) => ({
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: `Exercise ${i + 1}`,
  subtitle: 'A great movement for flexibility and strength',
  type: 'Stretching',
  muscleTargeted: 'Calves',
  equipment: 'None',
}));

export default function ExerciseDetails(props: { params: Promise<{ id: string }> }) {
  const params = React.use(props.params);
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const id = params.id;

  // State for routine
  const [routine, setRoutine] = React.useState<any[]>([]);

  // Store the index of the dragged exercise
  const dragItemIndex = React.useRef<number | null>(null);

  // Drag handlers
  const handleDragStart = (idx: number) => {
    dragItemIndex.current = idx;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow a drop
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragItemIndex.current !== null) {
      const exercise = mockExercises[dragItemIndex.current];
      // Prevent duplicates (optional)
      if (!routine.includes(exercise)) {
        setRoutine([...routine, exercise]);
      }
      dragItemIndex.current = null;
    }
  };

  return (
    <div className="flex p-6 max-w-7xl mx-auto">
      {/* Sidebar for routine */}
      <div
        className="w-80 mr-8 p-4 bg-gray-100 rounded-lg"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h2 className="font-bold mb-4">Routine</h2>
        {routine.length === 0 && (
          <div className="text-gray-400 italic">Drag exercises here</div>
        )}
        {routine.map((exercise, idx) => (
          <div key={idx} className="mb-2">
            <ExerciseCard {...exercise} />
          </div>
        ))}
      </div>
      {/* Main exercises area */}
      <div
        className="ml-8 grid gap-6 flex-1"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {mockExercises.map((exercise, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={() => handleDragStart(idx)}
            className="cursor-move"
          >
            <ExerciseCard {...exercise} />
          </div>
        ))}
      </div>
    </div>
  );
}
