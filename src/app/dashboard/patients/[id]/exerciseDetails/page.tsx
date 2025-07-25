"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { listExercises, listPlans } from "@/graphql/queries";
import { createPlan, createExercise } from "@/graphql/mutations";
import type {
  ListExercisesQuery,
  Exercise as ExerciseType,
  CreatePlanMutation,
  CreateExerciseMutation,
  ListPlansQuery,
} from "@/API";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExerciseCard from "@/app/dashboard/libs/components/exerciseCard";

const createPlanItemBasic = /* GraphQL */ `
  mutation CreatePlanItem($input: CreatePlanItemInput!) {
    createPlanItem(input: $input) {
      id
      planID
      exerciseID
      sets
      reps
      restSec
    }
  }
`;

interface RoutineExercise extends ExerciseType {
  routineId: string;
  isExpanded?: boolean;
  sets?: number;
  reps?: number;
  weights?: number;
  frequency?: string;
  duration?: string;
}



export default function ExerciseDetails({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = params.id;

  const frequencyDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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
  const [loading, setLoading] = React.useState(false);
  const [fetchError, setFetchError] = React.useState<string | null>(null);
  const [sending, setSending] = React.useState(false);

  const dragItemIndex = React.useRef<number | null>(null);

  // Fetch exercises on mount
  React.useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      setFetchError(null);
      try {
        const result = await client.graphql<ListExercisesQuery>({
          query: listExercises,
        });
        if ("data" in result && result.data?.listExercises?.items) {
          const exercises =
            result.data.listExercises.items?.filter(Boolean) ?? [];
          setLibraryExercises(exercises);
        } else {
          setLibraryExercises([]);
        }
      } catch (err) {
        setFetchError("Failed to fetch exercises.");
        setLibraryExercises([]);
      }
      setLoading(false);
    };
    fetchExercises();
  }, []);

  // Filtering logic for library
  const filteredExercises = React.useMemo(() => {
    return libraryExercises.filter((ex) => {
      const bodyParts = Array.isArray(ex.targetBodyParts)
        ? ex.targetBodyParts
        : [ex.targetBodyParts];
      const matchesBodyPart =
        !activeFilters.bodyPart || bodyParts.includes(activeFilters.bodyPart);

      const matchesSearch =
        !searchTerm ||
        ex.title?.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesBodyPart && matchesSearch;
    });
  }, [libraryExercises, activeFilters, searchTerm]);

  // Drag handlers
  const handleDragStart = React.useCallback((idx: number) => {
    dragItemIndex.current = idx;
  }, []);

  const handleDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    []
  );

  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (dragItemIndex.current !== null) {
        const exercise = filteredExercises[dragItemIndex.current];
        const routineId = `routine-${Date.now()}-${Math.random()}`;
        const exerciseWithDetails: RoutineExercise = {
          ...exercise,
          routineId,
          sets: 3,
          reps: 10,
          weights: 4,
          frequency: "Daily",
          isExpanded: false,
          duration: "3-4 min"
        };
        setRoutine((prev) => [...prev, exerciseWithDetails]);
        dragItemIndex.current = null;
      }
    },
    [filteredExercises]
  );

  // Routine editing handlers
  const toggleExerciseExpansion = React.useCallback((routineId: string) => {
    setRoutine((prev) =>
      prev.map((ex) =>
        ex.routineId === routineId ? { ...ex, isExpanded: !ex.isExpanded } : ex
      )
    );
  }, []);

  const updateExerciseDetails = React.useCallback(
    (routineId: string, field: string, value: string | number) => {
      setRoutine((prev) =>
        prev.map((ex) =>
          ex.routineId === routineId ? { ...ex, [field]: value } : ex
        )
      );
    },
    []
  );

  const removeExercise = React.useCallback((routineId: string) => {
    setRoutine((prev) => prev.filter((ex) => ex.routineId !== routineId));
  }, []);

  // Routine card
  const RoutineExerciseCard = ({ exercise }: { exercise: RoutineExercise }) => (
    <div
      className="bg-white rounded-lg border border-gray-200"
      style={{
        boxShadow: exercise.isExpanded
          ? "0 4px 12px rgba(0,0,0,0.05)"
          : undefined,
      }}
    >
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => toggleExerciseExpansion(exercise.routineId)}
        aria-label="Expand routine exercise"
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            <video
              src={exercise.demoUrl ?? ""}
              className="w-full h-full object-cover rounded-lg"
              muted
              playsInline
              loop
              onError={(e) => (e.currentTarget.style.display = "none")}
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
              <div>
                {Array.isArray(exercise.equipment)
                  ? exercise.equipment.filter(Boolean).join(", ")
                  : exercise.equipment ?? ""}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeExercise(exercise.routineId);
              }}
              className="text-red-500 hover:text-red-700 text-xs"
              aria-label="Remove from routine"
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
              <label
                htmlFor={`sets-${exercise.routineId}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sets
              </label>
              <input
                id={`sets-${exercise.routineId}`}
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
                min={0}
              />
            </div>
            <div>
              <label
                htmlFor={`reps-${exercise.routineId}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Reps
              </label>
              <input
                id={`reps-${exercise.routineId}`}
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
                min={0}
              />
            </div>
            <div>
              <label
                htmlFor={`freq-${exercise.routineId}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Frequency
              </label>
              <input
                id={`freq-${exercise.routineId}`}
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
              <label
                htmlFor={`weights-${exercise.routineId}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Weights/Resistance
              </label>
              <input
                id={`weights-${exercise.routineId}`}
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
                min={0}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Frequency</label>
              <div className="flex gap-1">
                {frequencyDays.map((day, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 text-xs border rounded ${
                      exercise.frequency === 'Daily' 
                        ? 'bg-blue-100 text-black border-blue-300' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">Notes</label>
            <textarea
              className="w-full  text-black px-3 py-2 border border-gray-300 rounded-md text-sm h-20"
              placeholder="Add notes..."
            />
          </div>
        </div>
      )}
    </div>
  );

  // Send to patient -- uses minimal mutation
  const handleSendToPatient = async () => {
    setSending(true);
    try {
      // 1. Get existing plan
      const existingPlans = await client.graphql<ListPlansQuery>({
        query: listPlans,
        variables: {
          filter: {
            patientID: { eq: id },
            status: { eq: "active" },
          },
        },
      });
      let planId: string;
      const plans = existingPlans.data?.listPlans?.items?.filter(Boolean);
      if (plans && plans.length > 0) {
        planId = plans[0].id!;
      } else {
        // 2. Create a plan if none exists
        const newPlan = await client.graphql<CreatePlanMutation>({
          query: createPlan,
          variables: {
            input: {
              name: `Custom Plan - ${name}`,
              status: "active",
              patientID: id,
              therapistID: "919b75d0-a031-70af-b33c-ad5059d30922",
            },
          },
        });
        planId = newPlan.data?.createPlan?.id!;
      }
      // 3. Create exercises and plan items
      for (const exercise of routine) {
        const createdExercise = await client.graphql<CreateExerciseMutation>({
          query: createExercise,
          variables: {
            input: {
              title: exercise.title!,
              prompt: exercise.prompt ?? "",
              category: exercise.category ?? "",
              duration: 30,
              equipment: exercise.equipment ?? [],
              targetBodyParts: exercise.targetBodyParts ?? [],
              sets: exercise.sets ?? 3,
              reps: exercise.reps ?? 10,
              weight: exercise.weights ?? 0,
              s3Key: exercise.s3Key ?? "",
              description: "",
            },
          },
        });
        const exerciseId = createdExercise.data?.createExercise?.id!;
        await client.graphql({
          query: createPlanItemBasic,
          variables: {
            input: {
              planID: planId,
              exerciseID: exerciseId,
              sets: exercise.sets ?? 3,
              reps: exercise.reps ?? 10,
              restSec: 30,
            },
          },
        });
      }
      alert("Routine sent to patient successfully.");
    } catch (err) {
      console.error("Error sending routine:", err);
      alert("Failed to send routine. Check console for details.");
    }
    setSending(false);
  };

  // Calculate summary statistics
  const totalExercises = routine.length;
  const totalSets = routine.reduce((sum, ex) => sum + (ex.sets || 0), 0);
  const estimatedMinutes = `${routine.length * 5}-${routine.length * 5 + 15}`;

  return (
    <div className="h-9/10 flex flex-col mb-5">
      {/* Header */}
      <div className=" mb-5 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{name}</h1>
            </div>
          </div>
          <Link
                className="px-4 py-2 bg-[#005DA4] text-white rounded-md text-sm font-medium hover:bg-blue-700"
                href={`/dashboard/patients/${id}/exerciseDetails/customExercise${name ? `?name=${encodeURIComponent(name)}` : ''}`}
              >
               <AutoAwesomeIcon className="mr-2" /> Generate Exercise
              </Link>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Plan Exercises */}
        <div className="w-1/3 bg-white rounded-xl mr-3 border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Plan Exercises</h2>
            <p className="text-sm text-gray-600">Drag and drop to build a custom plan.</p>
          </div>
          
          {/* Exercise List */}
          <div className="flex-1 overflow-y-auto p-4">
            {routine.length === 0 ? (
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                Drag exercises here to build your routine
              </div>
            ) : (
              <div className="space-y-3">
                {routine.map((exercise) => (
                  <RoutineExerciseCard key={exercise.routineId} exercise={exercise} />
                ))}
                
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 text-sm"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  Drop more exercises here
                </div>
              </div>
            )}
          </div>

          {/* Summary and Action Buttons */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex justify-between text-center mb-4">
              <div>
                <div className="text-xl font-bold text-gray-900">{totalExercises}</div>
                <div className="text-xs text-gray-600">Exercises</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{totalSets}</div>
                <div className="text-xs text-gray-600">Total Sets</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{estimatedMinutes}</div>
                <div className="text-xs text-gray-600">Est. Minutes</div>
              </div>
            </div>
            
            <button
              onClick={handleSendToPatient}
              className="w-full px-4 py-3 bg-[#005DA4] text-white rounded-lg text-base font-medium hover:bg-blue-700 flex items-center justify-center"
            >
              <SendIcon className="mr-2" /> Send to Patient
            </button>
          </div>
        </div>

        {/* Right Panel - Exercise Catalog */}
        <div className="w-2/3 flex flex-col ml-5 rounded-xl overflow-hidden bg-white">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Exercise Catalog</h2>
                <p className="text-sm text-gray-600">Search from the library or generate custom exercises using our AI-powered tool.</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search exercises..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                  aria-label="Search exercises"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
              <button className="pb-2 text-sm font-medium text-gray-900 border-b-2 border-[#005DA4]">
                Body Part
              </button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                Condition
              </button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                Equipment
              </button>
            </div>

            {/* Body Part Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Head', 'Elbow', 'Shoulder', 'Back', 'Hip', 'Knee', 'Ankle'].map((part) => (
                <button
                  key={part}
                  onClick={() => setActiveFilters(prev => ({ ...prev, bodyPart: part }))}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    activeFilters.bodyPart === part
                      ? 'bg-blue-100 border-blue-300 text-blue-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-label={`Filter by ${part}`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          {/* Exercise Grid - Scrollable */}
          <div className="flex-1 overflow-y-auto px-3 pb-3 mt-3">
            {loading ? (
              <div className="py-8 text-center text-gray-500">Loading...</div>
            ) : fetchError ? (
              <div className="py-8 text-center text-red-500">{fetchError}</div>
            ) : filteredExercises.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-2">Exercise Not Found</div>
                <Link
                className="px-4 py-2 bg-[#005DA4] text-white rounded-md text-sm font-medium hover:bg-blue-700"
                href={`/dashboard/patients/${id}/exerciseDetails/customExercise${name ? `?name=${encodeURIComponent(name)}` : ''}`}
              >
                <AutoAwesomeIcon className="mr-2" /> Generate Exercise
              </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredExercises.map((exercise, idx) => (
                  <div
                    key={exercise.id}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    className="cursor-grab active:cursor-grabbing"
                    tabIndex={0}
                    aria-grabbed="false"
                  >
                     <ExerciseCard
                        videoUrl={exercise.demoUrl ?? ""}
                        title={exercise.title}
                        subtitle={exercise.prompt ?? ""}
                        type={exercise.category ?? ""}
                        muscleTargeted={
                          Array.isArray(exercise.targetBodyParts)
                            ? exercise.targetBodyParts
                                .filter(Boolean)
                                .join(", ")
                            : exercise.targetBodyParts ?? ""
                        }
                        equipment={
                          Array.isArray(exercise.equipment)
                            ? exercise.equipment.filter(Boolean).join(", ")
                            : exercise.equipment ?? ""
                        }
                        duration="3-4 min"
                      />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}