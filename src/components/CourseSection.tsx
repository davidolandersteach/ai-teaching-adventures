
import React, { useState, useEffect, useRef } from "react";
import { getSectionColorTheme } from "@/utils/sectionThemes";
import SectionHeader from "./SectionHeader";
import MomentItem from "./MomentItem";
import ModuleProgress from "./ModuleProgress";

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
  
  // Track scroll progress
  const [progress, setProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Force initial render to ensure moments are visible in the UI
  useEffect(() => {
    // Force update to ensure component renders correctly
    setOpenMoments({...openMoments});
    
    // Try to load saved progress from localStorage
    const savedProgress = localStorage.getItem(`module-${sectionId}-progress`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }
    
    // Add scroll event listener to track progress
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionElement = sectionRef.current;
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionElement.scrollHeight;
      const scrollTop = window.scrollY;
      const sectionTop = sectionElement.offsetTop;
      
      // Calculate how far the user has scrolled through this section
      const viewportBottom = scrollTop + windowHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      if (viewportBottom >= sectionBottom) {
        // User has reached the bottom of the section
        setProgress(100);
        localStorage.setItem(`module-${sectionId}-progress`, '100');
      } else if (viewportBottom > sectionTop) {
        // User has partially scrolled through the section
        const scrolledAmount = viewportBottom - sectionTop;
        const scrollProgress = Math.min(Math.round((scrolledAmount / sectionHeight) * 100), 100);
        setProgress(scrollProgress);
        localStorage.setItem(`module-${sectionId}-progress`, scrollProgress.toString());
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId]);

  // Function to toggle moment open state
  const toggleMoment = (momentId: number) => {
    setOpenMoments(prev => ({
      ...prev,
      [momentId]: !prev[momentId]
    }));
  };
  
  // Function to reset progress
  const resetProgress = () => {
    setProgress(0);
    localStorage.removeItem(`module-${sectionId}-progress`);
  };

  const colorTheme = getSectionColorTheme(sectionId);

  return (
    <div ref={sectionRef}>
      <SectionHeader 
        sectionId={sectionId}
        title={title}
        description={description}
      />
      
      {/* Progress bar */}
      <ModuleProgress 
        progress={progress} 
        onReset={resetProgress}
        colorTheme={colorTheme}
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
    </div>
  );
};

export default CourseSection;
