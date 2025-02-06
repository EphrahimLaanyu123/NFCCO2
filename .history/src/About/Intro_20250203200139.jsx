import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/AboutPage/_KGP5796.JPG';
import "./Description.css"

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
        <div className="about-us">
          About Us
        </div>
      </motion.div>
    </div>
  );
}
