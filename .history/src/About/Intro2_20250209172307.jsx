import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '../assets/AboutPage/_KGP6014.JPG';
import "./Intro2.css";

function Intro2() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className="h-screen overflow-hidden relative flex items-center justify-center">
      <header className="absolute top-10 text-4xl font-bold text-white z-10">
        About Us
      </header>

      <motion.div style={{ y }} className="relative h-full w-full">
        <iframe
          src="https://www.youtube.com/embed/bP0zOyytMrQ?autoplay=1&mute=1&rel=0&loop=1&playlist=bP0zOyytMrQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="iframe w-3/4 h-3/4 object-cover"
        ></iframe>
      </motion.div>
    </div>
  );
}
