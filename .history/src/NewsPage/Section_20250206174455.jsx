import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/_KGP6196.JPG';
import "./Section.css";
import Link from '/link';

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


      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">

        </motion.div>
      </div>
    </div>
  );
}
