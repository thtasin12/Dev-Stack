import React from "react";
import { FaStar } from "react-icons/fa";
import type { Technology } from "../types";

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  tech,
  isAdded,
  onAdd,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {/* icon badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-10 h-10 flex items-center justify-center">
            {tech.icon ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center font-bold">
                {tech.name.charAt(0)}
              </div>
            )}
          </div>

          {tech.isPopular && (
            <span className="bg-sky-50 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* desc */}
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      <div>
        {/* rating */}
        <div className="flex items-center justify-between text-xs mb-6">
          <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-medium">
            {tech.category || "Frontend"}
          </span>

          <span className="text-slate-400 font-medium">
            {tech.level || "Beginner-Friendly"}
          </span>

          <div className="flex items-center gap-1 font-bold text-slate-800">
            <FaStar className="text-amber-400 text-sm" />
            <span>{tech.rating || 4.9}</span>
          </div>
        </div>

        {/* btn */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-[#080d1a] hover:bg-slate-800 text-white shadow-sm"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;