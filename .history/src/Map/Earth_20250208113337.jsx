import React, { useEffect, useRef } from 'react';
import './Earth.css';

const Earth = () => {
  const videoRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    const setHeight = setHeightRef.current;

    // Set page height based on video duration
    const handleLoadedMetadata = () => {
      const playbackConst = 1000;
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    };

    vid.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Scroll-based video playback
    const scrollPlay = () => {
      const frameNumber = window.pageYOffset / 1000;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);

    // Cleanup
    return () => {
      vid.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Text animation on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          section.classList.add('entered');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="container">
        <div className="content">
          <h1>Scroll to Begin</h1>
          <p>Start it like this..</p>
        </div>
      </section>

      <section className="container">
        <div className="content">
          <h1>Step 1</h1>
          <p>Start it like this..</p>
        </div>
      </section>

      <section className="container">
        <div className="content">
          <h1>Step 2</h1>
          <p>Start it like this..</p>
        </div>
      </section>

      <section className="container">
        <div className="content">
          <h1>Step 3</h1>
          <p>Start it like this..</p>
        </div>
      </section>

      <section className="container">
        <div className="content">
          <h1>Step 4</h1>
          <p>Start it like this..</p>
        </div>
      </section>

      <div id="set-height" ref={setHeightRef}></div>

      <video id="v0" ref={videoRef} tabIndex="0" autoBuffer preload>
        <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="fingers.mp4" />
      </video>
    </div>
  );
};

export default Earth;