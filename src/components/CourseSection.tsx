
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import MomentContent from "./MomentContent";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

// Module image mapping with correct assignments based on user's instructions
const getModuleImage = (sectionId: number) => {
  const images = {
    1: "/lovable-uploads/796c8632-5a2e-4bc0-bb56-0cbe324f94aa.png",
    2: "/lovable-uploads/99a70897-68c4-4af1-8876-0bb4044025b0.png",
    3: "/lovable-uploads/59141ba1-7dcd-4147-8da9-6e01cb989e65.png",
    4: "/lovable-uploads/db80bfcb-ab84-49d5-8916-6da4bf2fcd4d.png",
  };

  return images[sectionId as keyof typeof images] || null;
};

const CourseSection: React.FC<CourseSectionProps> = ({
  sectionId,
  title,
  description,
  moments,
}) => {
  // Initialize all moments as open by default
  const [openMoments, setOpenMoments] = useState<{[key: number]: boolean}>(() => {
    const initialState: {[key: number]: boolean} = {};
    moments.forEach((moment) => {
      // Open all moments by default
      initialState[moment.id] = true; 
    });
    return initialState;
  });

  // Function to toggle moment open state
  const toggleMoment = (momentId: number) => {
    setOpenMoments(prev => ({
      ...prev,
      [momentId]: !prev[momentId]
    }));
  };

  const colorTheme = getSectionColorTheme(sectionId);
  const moduleImage = getModuleImage(sectionId);

  return (
    <div className="animate-fade">
      <div 
        className={`bg-white rounded-lg shadow-sm border ${colorTheme.border} overflow-hidden hover:shadow-md transition-shadow relative`}
      >
        <div className="p-6 relative flex">
          {/* Content with padding for image */}
          <div className="flex-grow pr-6">
            <h1 className={`text-3xl font-bold ${colorTheme.primary}`}>{title}</h1>
            <div className="mt-4 text-gray-600">
              {description}
            </div>
          </div>
          
          {/* Position image next to text with full height */}
          {moduleImage && (
            <div 
              className={`flex-shrink-0 w-1/4 max-w-[200px] rounded-md overflow-hidden border ${colorTheme.border}`}
              style={{ height: '100%' }}
            >
              <img 
                src={moduleImage} 
                alt={`Modul ${sectionId}`} 
                className="w-full h-full object-contain bg-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Moments section - always visible but collapsed */}
      <div className="mt-8 space-y-4 transition-all duration-300">
        <h2 className={`text-xl font-semibold ${colorTheme.secondary}`}>
          Moment i modul {sectionId}
        </h2>
        
        <div className="space-y-4">
          {moments.map((moment, index) => (
            <Collapsible 
              key={moment.id} 
              className={`bg-white rounded-lg shadow-sm border ${colorTheme.border} overflow-hidden`}
              open={openMoments[moment.id] || false}
              onOpenChange={() => toggleMoment(moment.id)}
            >
              <CollapsibleTrigger 
                className={`w-full p-4 ${colorTheme.hover} font-medium flex items-center justify-between`}
              >
                <div className="flex items-center text-left">
                  <div className={`flex-shrink-0 h-8 w-8 mr-3 ${colorTheme.bg} ${colorTheme.primary} rounded-full flex items-center justify-center font-medium`}>
                    {moment.id}
                  </div>
                  <h3 className={`text-lg font-medium ${colorTheme.primary}`}>{moment.title}</h3>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t border-gray-100">
                <MomentContent content={moment.content} />
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
