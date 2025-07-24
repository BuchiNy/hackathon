"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { listExercises } from "@/graphql/queries";
import type { ListExercisesQuery, Exercise as ExerciseType } from "@/API";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ExerciseCard from "../../../libs/components/exerciseCard";
import Link from "next/link";

interface RoutineExercise extends ExerciseType {
  routineId: string;
  isExpanded?: boolean;
  sets?: number;
  reps?: number;
  weights?: number;
  frequency?: string;
}

export default function ExerciseDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = React.use(props.params);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = params.id;

  const client = generateClient();

  const [libraryExercises, setLibraryExercises] = React.useState<
    ExerciseType[]
  >([]);
  const [routine, setRoutine] = React.useState<RoutineExercise[]>([]);
  const [activeFilters, setActiveFilters] = React.useState({
    bodyPart: "Back",
    condition: "",
    equipment: "",
  });
  const [searchTerm, setSearchTerm] = React.useState("");

  const dragItemIndex = React.useRef<number | null>(null);

  React.useEffect(() => {
    const fetchExercises = async () => {
      try {
        const result = await client.graphql<ListExercisesQuery>({
          query: listExercises,
        });

        if ("data" in result && result.data?.listExercises?.items) {
          const exercises =
            result.data.listExercises.items?.filter(Boolean) ?? [];
          setLibraryExercises(exercises); // ✅ Now always an array
        } else {
          setLibraryExercises([]);
        }
      } catch (err) {
        console.error("Error fetching exercises:", err);
        setLibraryExercises([]);
      }
    };

    fetchExercises();
  }, []);

  const handleDragStart = (idx: number) => {
    dragItemIndex.current = idx;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragItemIndex.current !== null) {
      const exercise = libraryExercises[dragItemIndex.current];
      const routineId = `routine-${Date.now()}-${Math.random()}`;
      const exerciseWithDetails: RoutineExercise = {
        ...exercise,
        routineId,
        sets: 3,
        reps: 10,
        weights: 4,
        frequency: "Daily",
        isExpanded: false,
      };
      setRoutine((prev) => [...prev, exerciseWithDetails]);
      dragItemIndex.current = null;
    }
  };

  const toggleExerciseExpansion = (routineId: string) => {
    setRoutine((prev) =>
      prev.map((ex) =>
        ex.routineId === routineId ? { ...ex, isExpanded: !ex.isExpanded } : ex
      )
    );
  };

  const updateExerciseDetails = (
    routineId: string,
    field: string,
    value: string | number
  ) => {
    setRoutine((prev) =>
      prev.map((ex) =>
        ex.routineId === routineId ? { ...ex, [field]: value } : ex
      )
    );
  };

  const removeExercise = (routineId: string) => {
    setRoutine((prev) => prev.filter((ex) => ex.routineId !== routineId));
  };

  const RoutineExerciseCard = ({ exercise }: { exercise: RoutineExercise }) => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => toggleExerciseExpansion(exercise.routineId)}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <video
              src={exercise.demoUrl ?? ""}
              className="w-full h-full object-cover rounded-lg"
              muted
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 text-sm mb-1">
              {exercise.title}
            </h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div>
                {exercise.sets} Sets • {exercise.reps} Reps
              </div>
              <div>Weights: {exercise.weights}</div>
              <div>Frequency: {exercise.frequency}</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              <div>{exercise.category}</div>
              <div>
                {Array.isArray(exercise.targetBodyParts)
                  ? exercise.targetBodyParts.filter(Boolean).join(", ")
                  : exercise.targetBodyParts ?? ""}
              </div>
              <div>{exercise.equipment}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeExercise(exercise.routineId);
              }}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Remove
            </button>
            {exercise.isExpanded ? (
              <ArrowDropUpIcon className="w-5 h-5 text-gray-400" />
            ) : (
              <ArrowDropDownIcon className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {exercise.isExpanded && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sets
              </label>
              <input
                type="number"
                value={exercise.sets}
                onChange={(e) =>
                  updateExerciseDetails(
                    exercise.routineId,
                    "sets",
                    parseInt(e.target.value) || 0
                  )
                }
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reps
              </label>
              <input
                type="number"
                value={exercise.reps}
                onChange={(e) =>
                  updateExerciseDetails(
                    exercise.routineId,
                    "reps",
                    parseInt(e.target.value) || 0
                  )
                }
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency
              </label>
              <input
                type="text"
                value={exercise.frequency}
                onChange={(e) =>
                  updateExerciseDetails(
                    exercise.routineId,
                    "frequency",
                    e.target.value
                  )
                }
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weights/Resistance
              </label>
              <input
                type="number"
                value={exercise.weights}
                onChange={(e) =>
                  updateExerciseDetails(
                    exercise.routineId,
                    "weights",
                    parseInt(e.target.value) || 0
                  )
                }
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Input"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900"> {name}</h1>
            <p className="text-sm text-gray-600">Admission Number: {id}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Routine */}
        <div className="w-80 bg-gray-100 flex flex-col flex-shrink-0">
          <div className="p-4 flex-shrink-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Design Your Exercise
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            <div className="space-y-3 mb-6">
              {routine.map((exercise) => (
                <RoutineExerciseCard
                  key={exercise.routineId}
                  exercise={exercise}
                />
              ))}

              {routine.length === 0 && (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  Drag exercises here to build your routine
                </div>
              )}

              {routine.length > 0 && (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 text-sm"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  Drop more exercises here
                </div>
              )}
            </div>
          </div>

          <div className="p-4 flex-shrink-0 border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setRoutine([])}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => console.log("Routine saved", routine)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Save
              </button>
            </div>
            <button
              onClick={() => console.log("Sending routine to patient", routine)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Send to Patient
            </button>
          </div>
        </div>

        {/* Right Panel - Library */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Exercise Library
              </h2>
              <Link
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                href={`/dashboard/patients/${id}/exerciseDetails/customExercise${
                  name ? `?name=${encodeURIComponent(name)}` : ""
                }`}
              >
                Add Custom Exercise
              </Link>
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="flex gap-6 mb-6 border-b border-gray-200">
              <button className="pb-2 text-sm font-medium text-gray-900 border-b-2 border-blue-600">
                Body Part
              </button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                Condition
              </button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                Equipment
              </button>
            </div>

            <div className="flex gap-2 mb-6">
              {["Head", "Elbow", "Shoulder", "Back"].map((part) => (
                <button
                  key={part}
                  onClick={() =>
                    setActiveFilters((prev) => ({ ...prev, bodyPart: part }))
                  }
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    activeFilters.bodyPart === part
                      ? "bg-blue-100 border-blue-300 text-blue-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {libraryExercises.map((exercise, idx) => (
                <div
                  key={exercise.id}
                  draggable
                  onDragStart={() => handleDragStart(idx)}
                  className="cursor-grab active:cursor-grabbing transition-transform hover:scale-105"
                >
                  <ExerciseCard
                    videoUrl={exercise.demoUrl ?? ""}
                    title={exercise.title}
                    subtitle={exercise.prompt ?? ""}
                    type={exercise.category ?? ""}
                    muscleTargeted={
                      Array.isArray(exercise.targetBodyParts)
                        ? exercise.targetBodyParts.filter(Boolean).join(", ")
                        : exercise.targetBodyParts ?? ""
                    }
                    equipment={
                      Array.isArray(exercise.equipment)
                        ? exercise.equipment.filter(Boolean).join(", ")
                        : exercise.equipment ?? ""
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 mt-10 flex justify-between">
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          href={`/dashboard/patients`}
        >
          Previous
        </Link>
      </div>
    </div>
  );
}
