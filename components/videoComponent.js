import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-4/5 mx-auto rounded-2xl overflow-hidden">
      {isClient && (
          <ReactPlayer
            url="/images/videoHero.mp4"
            playing
            width="100%"
            height="100%"
            muted
            loop
          />
      )}
    </div>
  );
};
