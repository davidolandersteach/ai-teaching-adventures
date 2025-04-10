
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import MomentContent from "./MomentContent";

interface MomentData {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface CourseSectionProps {
  sectionId: number;
  title: string;
  description: string;
  moments: MomentData[];
}

const CourseSection: React.FC<CourseSectionProps> = ({
  sectionId,
  title,
  description,
  moments,
}) => {
  const [openMoment, setOpenMoment] = useState<number | null>(null);

  const toggleMoment = (momentId: number) => {
    setOpenMoment(openMoment === momentId ? null : momentId);
  };

  return (
    <div className="animate-fade">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-education-800">{title}</h1>
          <div className="mt-4 text-gray-600">{description}</div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Delens moment</h2>
        
        {moments.map((moment) => (
          <div key={moment.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => toggleMoment(moment.id)}
              className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 mr-3 bg-education-100 text-education-700 rounded-full flex items-center justify-center font-medium">
                  {moment.id}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{moment.title}</h3>
              </div>
              {openMoment === moment.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openMoment === moment.id ? "max-h-[2000px]" : "max-h-0"
              )}
            >
              <div className="p-4 border-t border-gray-100">
                <MomentContent content={moment.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
