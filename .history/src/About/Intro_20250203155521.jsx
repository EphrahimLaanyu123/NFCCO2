import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '../assets/AboutPage/_KGP6179.JPG';


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
        <img src={Background} alt="Background" className="object-cover w-full h-full" />
        <div className="absolute bottom-5 right-5 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2 rounded-lg">
          About Us
        </div>
      </motion.div>
    </div>
  );
}
