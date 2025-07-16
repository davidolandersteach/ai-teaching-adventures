
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
      className="welcome-card overflow-hidden group"
      open={isOpen}
      onOpenChange={onToggle}
    >
      <CollapsibleTrigger 
        className="w-full p-4 hover:bg-muted/50 font-medium flex items-center justify-between transition-colors"
      >
        <div className="flex items-center text-left">
          <div className="progress-ring w-8 h-8 mr-3 flex items-center justify-center text-white font-medium text-sm">
            {moment.id}
          </div>
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {moment.title}
          </h3>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 border-t border-border">
        <MomentContent content={moment.content} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MomentItem;
