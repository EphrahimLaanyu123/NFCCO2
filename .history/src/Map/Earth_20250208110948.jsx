import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Earth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Ensure the video is loaded before setting up ScrollTrigger
    video.addEventListener('loadedmetadata', () => {
      // Set up GSAP ScrollTrigger
      gsap.to(video, {
        currentTime: video.duration, // Animate the video's currentTime from 0 to its full duration
        scrollTrigger: {
          trigger: video, // Use the video as the trigger
          start: 'top top', // Start when the top of the video hits the top of the viewport
          end: 'bottom bottom', // End when the bottom of the video hits the bottom of the viewport
          scrub: true, // Smoothly scrub through the video as you scroll
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger instances
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
        preload="auto" // Ensure the video is preloaded for smooth playback
      />
    </div>
  );
};

export default Earth;