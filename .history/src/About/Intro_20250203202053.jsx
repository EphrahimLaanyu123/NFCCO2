import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/AboutPage/_KGP5972.JPG';
import './Description.css';

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div ref={container} className="intro-container">
      <motion.div style={{ y }} className="background-container">
        <img src={Background} alt="Background" className="background-image" />
        <div className="about-us">About Us</div>
        <div className="underline"></div>
      </motion.div>
    </div>
  );
}
