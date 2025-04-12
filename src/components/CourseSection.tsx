import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Image } from "lucide-react";
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

// Color theme mapping for each section
const getSectionColorTheme = (sectionId: number) => {
  const themes = {
    1: {
      primary: "text-blue-700",
      secondary: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
      hover: "hover:bg-blue-50",
      accent: "bg-blue-600",
      light: "text-blue-500",
    },
    2: {
      primary: "text-purple-700",
      secondary: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
      hover: "hover:bg-purple-50",
      accent: "bg-purple-600",
      light: "text-purple-500",
    },
    3: {
      primary: "text-green-700",
      secondary: "text-green-600",
      bg: "bg-green-100",
      border: "border-green-200",
      hover: "hover:bg-green-50",
      accent: "bg-green-600",
      light: "text-green-500",
    },
    4: {
      primary: "text-orange-700",
      secondary: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-200",
      hover: "hover:bg-orange-50",
      accent: "bg-orange-600",
      light: "text-orange-500",
    },
    5: {
      primary: "text-red-700",
      secondary: "text-red-600",
      bg: "bg-red-100",
      border: "border-red-200",
      hover: "hover:bg-red-50",
      accent: "bg-red-600",
      light: "text-red-500",
    },
    6: {
      primary: "text-teal-700",
      secondary: "text-teal-600",
      bg: "bg-teal-100",
      border: "border-teal-200",
      hover: "hover:bg-teal-50",
      accent: "bg-teal-600",
      light: "text-teal-500",
    },
    7: {
      primary: "text-indigo-700",
      secondary: "text-indigo-600",
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-50",
      accent: "bg-indigo-600",
      light: "text-indigo-500",
    },
    8: {
      primary: "text-pink-700",
      secondary: "text-pink-600",
      bg: "bg-pink-100",
      border: "border-pink-200",
      hover: "hover:bg-pink-50",
      accent: "bg-pink-600",
      light: "text-pink-500",
    },
  };

  return themes[sectionId as keyof typeof themes] || themes[1];
};

// Module image mapping - fixed with correct assignments
const getModuleImage = (sectionId: number) => {
  const images = {
    1: "/lovable-uploads/347e9312-ec20-4b2a-a718-b88cc9c5a042.png", // Module 1 image
    2: "/lovable-uploads/99a70897-68c4-4af1-8876-0bb4044025b0.png", // Module 2 image
    3: "/lovable-uploads/1df94af2-211c-4683-b744-0e1cab6e6ca8.png", // Module 3 image
    4: "/lovable-uploads/046c6fdb-5820-4900-8e27-2405c5c10d22.png", // Module 4 image
  };

  return images[sectionId as keyof typeof images] || null;
};

const CourseSection: React.FC<CourseSectionProps> = ({
  sectionId,
  title,
  description,
  moments,
}) => {
  // Show moments by default when section is loaded
  const [openMoment, setOpenMoment] = useState<number | null>(null);
  const [momentsVisible, setMomentsVisible] = useState(true);

  const toggleMoment = (momentId: number) => {
    setOpenMoment(openMoment === momentId ? null : momentId);
  };

  const colorTheme = getSectionColorTheme(sectionId);
  const moduleImage = getModuleImage(sectionId);

  return (
    <div className="animate-fade">
      <div 
        className={`bg-white rounded-lg shadow-sm border ${colorTheme.border} overflow-hidden cursor-pointer hover:shadow-md transition-shadow`}
        onClick={() => setMomentsVisible(!momentsVisible)}
      >
        <div className="p-6">
          <h1 className={`text-3xl font-bold ${colorTheme.primary}`}>{title}</h1>
          <div className="mt-4 text-gray-600 flex items-start gap-4">
            <div className="flex-grow">{description}</div>
            <div className={`w-1/4 flex-shrink-0 rounded-md overflow-hidden border ${colorTheme.border}`}>
              {moduleImage ? (
                <img src={moduleImage} alt={`Modul ${sectionId}`} className="w-full h-auto object-cover" />
              ) : (
                <div className={`w-full h-32 ${colorTheme.bg} flex items-center justify-center`}>
                  <span className={`text-2xl font-bold ${colorTheme.primary}`}>#{sectionId}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "mt-8 space-y-4 transition-all duration-300",
        momentsVisible ? "block" : "hidden"
      )}>
        <h2 className={`text-xl font-semibold ${colorTheme.secondary}`}>
          Moment i modul {sectionId}
        </h2>
        
        {moments.map((moment) => (
          <div 
            key={moment.id} 
            className={`bg-white rounded-lg shadow-sm border ${colorTheme.border} transform transition-all duration-200 hover:shadow-md`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMoment(moment.id);
              }}
              className={`w-full p-4 flex justify-between items-center text-left focus:outline-none ${colorTheme.hover}`}
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-8 w-8 mr-3 ${colorTheme.bg} ${colorTheme.primary} rounded-full flex items-center justify-center font-medium`}>
                  {moment.id}
                </div>
                <h3 className={`text-lg font-medium ${colorTheme.primary}`}>{moment.title}</h3>
              </div>
              {openMoment === moment.id ? (
                <ChevronUp className={`h-5 w-5 ${colorTheme.light}`} />
              ) : (
                <ChevronDown className={`h-5 w-5 ${colorTheme.light}`} />
              )}
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openMoment === moment.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className={`p-4 border-t ${colorTheme.border}`}>
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
