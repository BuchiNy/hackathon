import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

type ExerciseCardProps = {
  videoUrl: string;
  title: string;
  type: string;
  subtitle?: string;
  muscleTargeted: string;
  equipment: string;
  duration: string;
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  videoUrl,
  title,
  type,
  subtitle,
  muscleTargeted,
  equipment,
  duration = "3-4 Mins",
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
      {/* Video Preview (Responsive height) */}
      <div className="w-full aspect-video bg-black">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
        {/* Title & Type */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">{type}</p>
        </div>

        {/* Duration */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded">
            <AlarmOnIcon fontSize="small" />
          </div>
          <span className="text-sm text-gray-800">{duration}</span>
        </div>

        <div className="flex justify-between items-center gap-2 pt-3">
          {/* Add to Plan - 55% */}
          <button className="flex-1 basis-[55%] px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Add to Plan
          </button>

          {/* Modify - 35% */}
          <button className="flex-1 basis-[35%] px-3 py-2 border border-blue-900 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition flex items-center justify-center space-x-1">
            <AutoAwesomeIcon fontSize="small" />
            <span>Modify</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
