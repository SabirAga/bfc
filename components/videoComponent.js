import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-[500px] mx-auto">
      {isClient && (
        <ReactPlayer
          url="/images/heroVideo.mp4"
          playing
          width='100%'
          height="100%"
          muted
          loop
        />
      )}
    </div>
  );
};
