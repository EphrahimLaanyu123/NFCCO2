import React, { useRef, useEffect } from 'react';

const Earth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const videoHeight = video.duration * 100; // Adjust the multiplier for smoother playback

      const scrollProgress = (scrollY / (document.body.scrollHeight - windowHeight)) * 100;
      const videoTime = (scrollProgress / 100) * video.duration;

      video.currentTime = videoTime;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <video
        ref={videoRef}
        src="https://wypdqskzrgtlfakdgmbb.supabase.co/storage/v1/object/public/images//cd2456a0-30b1-457b-ab08-7ffd3756c0f7.MP4"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        muted
        loop
      />
    </div>
  );
};

export default Earth;