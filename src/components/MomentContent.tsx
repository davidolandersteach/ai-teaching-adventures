
import React from "react";

interface MomentContentProps {
  content: React.ReactNode;
}

const MomentContent: React.FC<MomentContentProps> = ({ content }) => {
  return <div className="prose max-w-none">{content}</div>;
};

export default MomentContent;
