import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Background from '/home/user/nfcco/src/assets/AboutPage/_KGP5972.JPG';
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
        <img src={Background} alt="Background" className="background-image object-cover w-full h-full" />
        <div className="about-us-page">
          <h1 >
            TRANSFORMING NDOTO ONE TREE AT A TIME
          </h1>
          <p>
          ONE TREE AT A TIME
          </p>

          <article className='about-us-artcile'>
            
          </article>
        </div>

      </motion.div>
    </div>
  );
}
