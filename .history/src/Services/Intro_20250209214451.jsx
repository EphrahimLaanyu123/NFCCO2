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
      <div className="services-page">
      {/* Header Section */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          We are dedicated to empowering communities, conserving nature, and promoting sustainable development. 
          Explore how we work to create a positive impact through innovative and collaborative initiatives.
        </p>
      </header>
    </div>


      </motion.div>
    </div>
  );
}
