import React, { useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Modal from './Modal';
import "./Section.css";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div
      ref={container}
      className="add-article relative flex items-center justify-center h-[60vh] overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      {/* Centered Text */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-3xl font-bold mb-6">Suggest an Article</h1>
            <button
              className="suggest-button text-white bg-blue-500 px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300"
              onClick={openModal}
            >
              Suggest an Article
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal Component */}
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}
