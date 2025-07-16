import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { BookOpen, Heart } from "lucide-react";

const WelcomeToast = () => {
  useEffect(() => {
    // Check if user has seen welcome message
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    
    if (!hasSeenWelcome) {
      // Show welcome toast after a short delay
      const timer = setTimeout(() => {
        toast({
          title: "Välkommen till AI i utbildning! 🎉",
          description: (
            <div className="flex items-center gap-2 mt-2">
              <BookOpen className="h-4 w-4" />
              <span>Börja med Modul 1 för din första introduktion till AI</span>
            </div>
          ),
          duration: 5000,
        });
        
        // Mark as seen
        localStorage.setItem("hasSeenWelcome", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return null;
};

export default WelcomeToast;