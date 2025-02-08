import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger} from 'gsap/ScrollTrigger';
import './Earth.css'; // Import your CSS file

const Earth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    let src = video.currentSrc || video.src;

    // Function to handle touchstart for iOS
    const once = (el, event, fn, opts) => {
      const onceFn = (e) => {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    });

    setTimeout(() => {
      if (window.fetch) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            const blobURL = URL.createObjectURL(response);
            const t = video.currentTime;

            once(document.documentElement, "touchstart", () => {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);

    return () => { // Cleanup on unmount
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <video
        ref={videoRef}
        src="https://assets.codepen.io/39255/output_960.mp4"
        playsInline={true}
        webkitPlaysInline={true}
        preload="auto"
        muted={true}
        className="video-background"
      />
      <div id="container" style={{ height: '500vh' }}></div> {/* Inline style for container height */}
    </div>
  );
};

export default Earth;