import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from './Intro';
import Appro
import Section from './Section';
import Footer from '../Footer/Footer1';
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
      <ApprovedArticlesPage/>
      {/* <div className="h-screen"></div> */}
      <Footer />

    </main>
  );
}

export default About;
