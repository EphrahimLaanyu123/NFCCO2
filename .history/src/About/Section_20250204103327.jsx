import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/_KGP6196.JPG';

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
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        {/* <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
          Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.
        </p>
        <p className="text-[5vw] uppercase mix-blend-difference">Background Parallax</p> */}
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img src={Background} alt="Background" className="object-cover w-full h-full filter: grayscale(100%)" />
        </motion.div>
      </div>
    </div>
  );
}
