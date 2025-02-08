import React, { useRef, useEffect } from 'react';

const Earth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoTop = videoRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Check if the video is in the viewport
        if (videoTop < viewportHeight && videoTop > -videoRef.current.offsetHeight) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          }
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause(); // Pause when out of viewport
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'fixed', top: 0, left: 0 }}> {/* Full-screen container */}
      <video
        ref={videoRef}
        src="https://wypdqskzrgtlfakdgmbb.supabase.co/storage/v1/object/public/images//cd2456a0-30b1-457b-ab08-7ffd3756c0f7.MP4"
        type="video/mp4"
        loop
        muted // You might want to unmute when in viewport if needed.
        style={{
          objectFit: 'cover', // Cover the entire container
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default Earth;