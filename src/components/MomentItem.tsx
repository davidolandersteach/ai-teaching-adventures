
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import MomentContent from "./MomentContent";
import { getSectionColorTheme } from "@/utils/sectionThemes";

interface MomentItemProps {
  sectionId: number;
  moment: {
    id: number;
    title: string;
    content: React.ReactNode;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const MomentItem: React.FC<MomentItemProps> = ({ 
  sectionId, 
  moment, 
  isOpen, 
  onToggle 
}) => {
  const colorTheme = getSectionColorTheme(sectionId);

  return (
    <Collapsible 
      className={`bg-white rounded-lg shadow-sm border ${colorTheme.border} overflow-hidden`}
      open={isOpen}
      onOpenChange={onToggle}
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
  );
};

export default MomentItem;
