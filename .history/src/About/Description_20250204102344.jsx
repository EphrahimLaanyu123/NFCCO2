import React from 'react';
import "./Description.css"
import aboutusimage from "/home/user/nfcco/src/assets/AboutPage/_KGP5796.JPG";

export default function Description() {
  return (
    <div className="aboutus-artcile flex">
      <section className="aboutus-artcile-top">
        <section className='aboutus-artcile-top-1'>
          <p>TRANSFORMING NDOTO ONE TREE AT A TIME THROUGH NDOTO FOREST</p>
        </section>
        <section className='aboutus-artcile-top-2'>
          <img src={aboutusimage} alt="" />
        </section>
        <section className='aboutus-artcile-top-3'>
          <p>Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.</p>
        </section>
      </section>

      <section className="aboutus-article-bottom">
  <div className="aboutus-bottom-header">
    <h1>Our Vision and Mission</h1>
  </div>
  <div className="aboutus-bottom-content">
    <div className="aboutus-paragraph">
      <h2>Our Vision</h2>
      <p>To create a sustainable environment where forests thrive, biodiversity flourishes, and communities benefit from ecological balance.</p>
    </div>
    <div className="aboutus-paragraph">
      <h2>Our Mission</h2>
      <p>To combat climate change through afforestation, reforestation, and community-led conservation initiatives.</p>
    </div>
    <div className="aboutus-paragraph">
      <h2>Our Values</h2>
      <p>We value community empowerment, sustainability, and environmental stewardship as pillars of our work.</p>
    </div>
    <div className="aboutus-paragraph">
      <h2>Our Impact</h2>
      <p>We have planted over 100,000 trees and empowered local communities to sustainably manage their natural resources.</p>
    </div>
  </div>
</section>

    </div>
  );
}
