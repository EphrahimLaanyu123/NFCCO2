import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // If you're using react-router for page navigation
import Background from '../assets/_KGP6196.JPG';
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
      className="section-wrapper relative flex items-center justify-center h-[60vh] overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      {/* Centered Text */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          {/* Button */}
          <div className="absolute bottom-10 w-full flex justify-center">
            <Link to="/add-article"> {/* Use your desired target path */}
              <motion.button
                className="suggest-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Go to Target Page
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
