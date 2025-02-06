import React, { useEffect } from 'react';
import Lenis from 'lenis';
import intr
import Description from './components/Description';
import Section from './components/Section';

function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen"></div>
    </main>
  );
}

export default About;
