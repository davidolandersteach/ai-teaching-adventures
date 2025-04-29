
import React, { useState, useEffect } from "react";
import { getSectionColorTheme } from "@/utils/sectionThemes";
import SectionHeader from "./SectionHeader";
import MomentItem from "./MomentItem";

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
  // Initialize all moments as closed by default
  const [openMoments, setOpenMoments] = useState<{[key: number]: boolean}>({});

  // Force initial render to ensure moments are visible in the UI
  useEffect(() => {
    // Force update to ensure component renders correctly
    setOpenMoments({...openMoments});
  }, []);

  // Function to toggle moment open state
  const toggleMoment = (momentId: number) => {
    setOpenMoments(prev => ({
      ...prev,
      [momentId]: !prev[momentId]
    }));
  };

  const colorTheme = getSectionColorTheme(sectionId);

  return (
    <>
      <SectionHeader 
        sectionId={sectionId}
        title={title}
        description={description}
      />

      {/* Moments section - always visible but collapsed */}
      <div className="mt-8 space-y-4 transition-all duration-300">
        <h2 className={`text-xl font-semibold ${colorTheme.secondary}`}>
          Moment i modul {sectionId}
        </h2>
        
        <div className="space-y-4">
          {moments.map((moment) => (
            <MomentItem
              key={moment.id}
              sectionId={sectionId}
              moment={moment}
              isOpen={!!openMoments[moment.id]}
              onToggle={() => toggleMoment(moment.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseSection;
