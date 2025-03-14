import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '../assets/AboutPage/_KGP6014.JPG';
import "./Intro.css";

export default function Intro() {
  const container = useRef();
  const iframeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the iframe is visible
    );
    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }
    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <motion.div style={{ y }} className="relative h-full">
        <div className="about-us-page">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/bP0zOyytMrQ?autoplay=${isVisible ? 1 : 0}&mute=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="iframe"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
