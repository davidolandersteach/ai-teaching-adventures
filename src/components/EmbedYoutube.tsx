
import React from "react";

interface EmbedYoutubeProps {
  videoId: string;
  title?: string;
}

const EmbedYoutube: React.FC<EmbedYoutubeProps> = ({ videoId, title = "YouTube Video" }) => {
  return (
    <div className="my-4">
      {title && <h4 className="text-lg font-medium mb-2">{title}</h4>}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedYoutube;
