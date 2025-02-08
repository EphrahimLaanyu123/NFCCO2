import React, { useEffect, useRef } from 'react';
import './earth.css';

const Earth = () => {
  const videoRef = useRef(null);

  const handleScroll = () => {
    const video = videoRef.current;
    if (video) {
      // Calculate the scroll position and set video playback time
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const videoHeight = video.clientHeight;
      const videoStart = video.offsetTop;
      const videoEnd = videoStart + videoHeight;
      
      // Calculate the percentage of video that should have played
      const scrollPosition = Math.min(Math.max(scrollY - videoStart, 0), videoHeight);
      const videoTime = (scrollPosition / videoHeight) * video.duration;
      video.currentTime = videoTime;
    }
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="earth-page">
      <h1 className="title">Earth Video</h1>
      <div className="video-container">
        <video
          ref={videoRef}
          src="https://wypdqskzrgtlfakdgmbb.supabase.co/storage/v1/object/public/images/cd2456a0-30b1-457b-ab08-7ffd3756c0f7.MP4"
          className="earth-video"
          muted
          loop
        />
      </div>
    </div>
  );
};

export default Earth;
