import React, { useEffect, useRef } from 'react';
import './Earth.css';

const Earth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoPlayback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVideoPlayback, {
      threshold: 0.5, // Video needs to be at least 50% visible
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="earth-video-container">
      <video
        ref={videoRef}
        src="https://ik.imagekit.io/rcdu2cobzo/ndoto-globe.mp4?updatedAt=1739026642278"
        muted
        playsInline
        loop
        className="earth-video"
      />
    </div>
  );
};

export default Earth;
