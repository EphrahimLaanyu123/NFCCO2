import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '../assets/AboutPage/_KGP6014.JPG';
import "./Intro.css"

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className="h-screen overflow-hidden relative">
      <motion.div style={{ y }} className="relative h-full">
        {/* <img src={Background} alt="Background" className="background-image object-cover w-full h-full" /> */}
        <div className="about-us-page">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" ></div> {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"> {/* Center the iframe */}
          <iframe 
 
            src="https://www.youtube.com/embed/bP0zOyytMrQ?si=1aUIfL03uVg3GCub"  // Corrected URL format
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="rounded-lg shadow-lg" // Add some styling (optional)
          ></iframe>
        </div>
        </div>

      </motion.div>
    </div>
  );
}
