import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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
    <section
      className="bg-white rounded-xl shadow-md overflow-hidden border border-[[#98A2B3]] p-4
        transition-transform hover:shadow-lg flex flex-col"
      aria-label={`Exercise card for ${title}`}
    >
       <figure className="aspect-video bg-black/10 overflow-hidden rounded-t-3xl flex items-center justify-center">
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
          poster=""
        >
          Your browser does not support the video tag.
        </video>
      </figure>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="font-bold text-lg text-gray-900">{title}</h2>
            <p className="text-base text-gray-800">{type}</p>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            ♡
          </button>
        </div>
        
        {subtitle && (
          <p className="italic text-sm text-gray-700 mb-4">
            {subtitle}
          </p>
        )}
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 border border-gray-600 rounded-full mr-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            </span>
            <span className="text-sm text-gray-800">{muscleTargeted}</span>
          </div>
          
          <div className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 border border-gray-600 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-gray-600">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm text-gray-800">{duration}</span>
          </div>
        </div>
        
        <div className="flex items-center content-center justify-between">
          <div className="px-4 w-65 mr-3 content-center items-center h-10 mt-18 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Add to Plan
          </div>
          <button className="px-4 w-35 mr-3 h-10 mt-18 border-blue-900 border text-blue-600 rounded-md text-sm font-medium hover:bg-blue-200">
          <AutoAwesomeIcon/>  Modify
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExerciseCard;