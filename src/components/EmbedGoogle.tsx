
import React from "react";

interface EmbedGoogleProps {
  type: "doc" | "slides" | "sheets" | "forms";
  documentId: string;
  title?: string;
}

const EmbedGoogle: React.FC<EmbedGoogleProps> = ({ type, documentId, title }) => {
  const getEmbedUrl = () => {
    switch (type) {
      case "doc":
        return `https://docs.google.com/document/d/${documentId}/preview`;
      case "slides":
        return `https://docs.google.com/presentation/d/${documentId}/embed`;
      case "sheets":
        return `https://docs.google.com/spreadsheets/d/${documentId}/preview`;
      case "forms":
        return `https://docs.google.com/forms/d/${documentId}/viewform?embedded=true`;
      default:
        return "";
    }
  };

  return (
    <div className="my-4">
      {title && <h4 className="text-lg font-medium mb-2">{title}</h4>}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          src={getEmbedUrl()}
          title={title || `Google ${type}`}
          width="100%"
          height="500"
          className="w-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedGoogle;
