import React from 'react';

const Earth = () => {
  return (
    <div className="earth-video-container">
      <video
        src="https://ik.imagekit.io/rcdu2cobzo/ndoto-globe.mp4?updatedAt=1739026642278"
        autoPlay
        loop
        muted
        playsInline
        className="earth-video"
      />
    </div>
  );
};

export default Earth;
