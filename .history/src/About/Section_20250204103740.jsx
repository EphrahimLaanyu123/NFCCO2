import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/_KGP6196.JPG';
import "./Section.css";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[60vh] overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      {/* Centered Text */}
      <div className="absolute z-10 p-20 text-white flex justify-center items-center w-full h-full">
        <div className="mission-content text-center">
          <h1 className="mission-title">Our Mission</h1>
          <blockquote className="mission-text">
            Our mission is to safeguard the Ndoto Forest region through innovative and community-driven conservation practices. We aim to reforest degraded areas, raise awareness about environmental sustainability, and empower local communities with the knowledge and resources to protect their natural heritage for generations to come.
          </blockquote>
        </div>
      </div>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src={Background}
            alt="Background"
            className="object-cover w-full h-full filter grayscale"
          />
        </motion.div>
      </div>
    </div>
  );
}
