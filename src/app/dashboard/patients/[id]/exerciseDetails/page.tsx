"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ExerciseCard from "../../../libs/components/exerciseCard";
import Link from "next/link";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "../../../../../amplifyconfiguration.json";
import { listExercises } from "@/graphql/queries";
import type {
  ListExercisesQuery,
  ListExercisesQueryVariables,
  Exercise as ExerciseModel,
} from "@/API";

Amplify.configure(config);
const client = generateClient();

interface Exercise {
  id: string;
  videoUrl: string;
  title: string;
  subtitle?: string;
  type: string;
  muscleTargeted: string;
  equipment: string;
  sets?: number;
  reps?: number;
  weights?: number;
  frequency?: string;
}

interface RoutineExercise extends Exercise {
  routineId: string;
  isExpanded?: boolean;
}

export default function ExerciseDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = React.use(props.params);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = params.id;

  const [routine, setRoutine] = React.useState<RoutineExercise[]>([]);
  const [exercises, setExercises] = React.useState<Exercise[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [activeFilters, setActiveFilters] = React.useState({
    bodyPart: "Back",
    condition: "",
    equipment: "",
  });
  const [searchTerm, setSearchTerm] = React.useState("");

  const dragItemIndex = React.useRef<number | null>(null);

  const handleDragStart = (idx: number) => {
    dragItemIndex.current = idx;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragItemIndex.current !== null) {
      const exercise = exercises[dragItemIndex.current];
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

  React.useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const result = await client.graphql<ListExercisesQuery>({
          query: listExercises,
          variables: {
            // filter: {
            //   targetBodyParts: { contains: activeFilters.bodyPart },
            // },
          },
        });

        const items =
          "data" in result && result.data?.listExercises?.items
            ? result.data.listExercises.items
            : [];

        // Map GraphQL result to your custom UI shape
        const mappedExercises: Exercise[] = items
          .filter((e: ExerciseModel | null): e is ExerciseModel => e !== null)
          .map((e: ExerciseModel) => ({
            id: e.id,
            title: e.title,
            subtitle: e.description ?? "",
            videoUrl: e.demoUrl ?? "",
            type: e.category ?? "",
            muscleTargeted: e.targetBodyParts?.join(", ") ?? "",
            equipment: e.equipment?.join(", ") ?? "",
            sets: e.sets ?? undefined,
            reps: e.reps ?? undefined,
            weights: e.weight ?? undefined,
            frequency: "",
          }));

        setExercises(mappedExercises);
      } catch (err) {
        console.error("Failed to fetch exercises", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [activeFilters.bodyPart]);

  const filteredExercises = exercises.filter((ex) =>
    ex.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const RoutineExerciseCard = ({ exercise }: { exercise: RoutineExercise }) => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => toggleExerciseExpansion(exercise.routineId)}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <video
              src={exercise.videoUrl}
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
              <div>{exercise.type}</div>
              <div>{exercise.muscleTargeted}</div>
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
            {[
              { label: "Sets", key: "sets", type: "number" },
              { label: "Reps", key: "reps", type: "number" },
              { label: "Frequency", key: "frequency", type: "text" },
              { label: "Weights/Resistance", key: "weights", type: "number" },
            ].map(({ label, key, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  value={exercise[key as keyof RoutineExercise] ?? ""}
                  onChange={(e) =>
                    updateExerciseDetails(
                      exercise.routineId,
                      key,
                      type === "number"
                        ? parseInt(e.target.value) || 0
                        : e.target.value
                    )
                  }
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            ))}
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
            <h1 className="text-lg font-semibold text-gray-900">{name}</h1>
            <p className="text-sm text-gray-600">Admission Number: {id}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Routine Builder */}
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

        {/* Exercise Library */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Exercise Library
              </h2>
              <Link
                href={`/dashboard/patients/${id}/exerciseDetails/customExercise${
                  name ? `?name=${encodeURIComponent(name)}` : ""
                }`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Add Custom Exercise
              </Link>
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-md text-sm"
            />

            <div className="flex gap-6 mb-6 border-b border-gray-200">
              {["Body Part", "Condition", "Equipment"].map((label) => (
                <button
                  key={label}
                  className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {label}
                </button>
              ))}
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
            {loading ? (
              <p className="text-gray-500 text-sm">Loading exercises...</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredExercises.map((exercise, idx) => (
                  <div
                    key={exercise.id}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    className="cursor-grab active:cursor-grabbing transition-transform hover:scale-105"
                  >
                    <ExerciseCard
                      videoUrl={exercise.videoUrl}
                      title={exercise.title}
                      subtitle={exercise.subtitle}
                      type={exercise.type}
                      muscleTargeted={exercise.muscleTargeted}
                      equipment={exercise.equipment}
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
