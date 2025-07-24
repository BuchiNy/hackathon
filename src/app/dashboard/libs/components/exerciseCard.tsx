import React from "react";

type ExerciseCardProps = {
  videoUrl: string;
  title: string;
  subtitle?: string;
  type: string;
  muscleTargeted: string;
  equipment: string;
};

const Badge = ({
  text,
  bg,
  textColor,
}: {
  text: string;
  bg: string;
  textColor: string;
}) => (
  <span
    className={`${bg} ${textColor} px-3 py-1 rounded-full text-xs font-semibold shadow-sm`}
  >
    {text}
  </span>
);

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  videoUrl,
  title,
  subtitle,
  type,
  muscleTargeted,
  equipment,
}) => {
  return (
    <section
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700
        transition-transform hover:shadow-lg hover:scale-[1.03] flex flex-col"
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
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 mb-4">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-3 mt-auto">
          <Badge
            text={type}
            bg="bg-blue-100 dark:bg-blue-900"
            textColor="text-blue-700 dark:text-blue-200"
          />
          <Badge
            text={muscleTargeted}
            bg="bg-green-100 dark:bg-green-900"
            textColor="text-green-700 dark:text-green-200"
          />
          <Badge
            text={equipment}
            bg="bg-yellow-100 dark:bg-yellow-900"
            textColor="text-yellow-700 dark:text-yellow-200"
          />
        </div>
      </div>
    </section>
  );
};

export default ExerciseCard;
