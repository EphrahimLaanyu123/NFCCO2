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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
          We offer a wide range of services designed to help your business grow and succeed. Explore how we can help you achieve your goals.
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="text-purple-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development</h3>
          <p className="text-gray-600">
            We build fast, responsive, and scalable websites tailored to your business needs.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="text-purple-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Marketing</h3>
          <p className="text-gray-600">
            Boost your online presence with our data-driven marketing strategies.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="text-purple-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Optimization</h3>
          <p className="text-gray-600">
            Improve your search engine rankings and drive organic traffic to your site.
          </p>
        </div>
      </div>
    </div>


      </motion.div>
    </div>
  );
}
