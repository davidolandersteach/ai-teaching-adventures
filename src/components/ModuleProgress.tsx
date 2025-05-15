
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ModuleProgressProps {
  progress: number;
  onReset: () => void;
  colorTheme: {
    primary: string;
    secondary: string;
  };
}

const ModuleProgress: React.FC<ModuleProgressProps> = ({
  progress,
  onReset,
  colorTheme,
}) => {
  return (
    <div className="flex items-center gap-4 mt-6 mb-4">
      <div className="flex-1">
        <Progress
          value={progress}
          className={`h-3 bg-gray-100 ${colorTheme.secondary.replace('text-', 'bg-opacity-20')}`}
        />
      </div>
      <Button
        onClick={onReset}
        variant="outline"
        size="sm"
        className={`${colorTheme.primary.replace('text-', 'text-')} ${colorTheme.primary.replace('text-', 'hover:bg-')} hover:bg-opacity-10`}
      >
        <RefreshCw className="w-4 h-4 mr-1" />
        Reset
      </Button>
    </div>
  );
};

export default ModuleProgress;
