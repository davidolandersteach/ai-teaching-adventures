
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, Target } from "lucide-react";

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
  const isComplete = progress === 100;
  
  return (
    <div className="welcome-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="progress-ring w-10 h-10 flex items-center justify-center">
          {isComplete ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <Target className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-foreground">Framsteg</h3>
            <span className="text-sm font-medium text-muted-foreground">
              {progress}%
            </span>
          </div>
          <Progress
            value={progress}
            className="h-2"
          />
        </div>
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4 mr-1" />
          Återställ
        </Button>
      </div>
      {isComplete && (
        <div className="text-center text-sm text-muted-foreground">
          🎉 Grattis! Du har slutfört denna modul.
        </div>
      )}
    </div>
  );
};

export default ModuleProgress;
