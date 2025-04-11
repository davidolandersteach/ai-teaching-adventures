
import React from "react";

interface MomentContentProps {
  content: React.ReactNode;
}

const MomentContent: React.FC<MomentContentProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      {content}
      
      {/* Fix for embedded images */}
      <style jsx>{`
        .prose img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1rem 0;
        }
        
        .prose iframe {
          max-width: 100%;
          border-radius: 0.375rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default MomentContent;
