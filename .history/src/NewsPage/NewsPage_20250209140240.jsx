import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Description from './Description';
import Intro from './Intro';
import Section from './Section';
import Footer from '../Footer/Footer1';
import Navbar from '../Navbar/NavBar';
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
      <Intro />
      <Description />
      <Section />
      {/* <div className="h-screen"></div> */}
      <Footer />

    </main>
  );
}

export default About;
