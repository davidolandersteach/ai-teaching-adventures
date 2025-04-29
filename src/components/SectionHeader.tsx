
import React from "react";
import { getSectionColorTheme, getModuleImage } from "@/utils/sectionThemes";

interface SectionHeaderProps {
  sectionId: number;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionId,
  title,
  description,
}) => {
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
    </div>
  );
};

export default SectionHeader;
