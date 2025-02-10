import React from 'react';
import "./Description.css"
import aboutusimage from "../assets/AboutPage/_KGP5796.JPG";

export default function Description() {
  return (
    <div className="aboutus-artcile flex">
      <section className="aboutus-artcile-top">
        <section className='aboutus-artcile-top-1'>
          <p>TRANSFORMING NDOTO ONE TREE AT A TIME THROUGH NDOTO FOREST</p>

          <img src={aboutusimage} alt="" />


          <p>Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.</p>

      </section>

      <section className="aboutus-article-bottom">
  <div className="aboutus-bottom-header">
    <h1>Our Vision and Mission</h1>
  </div>
  <div className="aboutus-bottom-content">
    <div className="aboutus-paragraph">
      <h2>Our Vision</h2>
      <p>
        To create a harmonious balance between nature and communities by promoting the restoration and preservation of forests. 
        We envision a world where trees are not only symbols of life but also powerful tools for combating climate change 
        and enhancing community resilience in the face of environmental challenges.
      </p>
    </div>
    <div className="aboutus-paragraph">
      <h2>Our Mission</h2>
      <p>
        Our mission is to safeguard the Ndoto Forest region through innovative and community-driven conservation practices. 
        We aim to reforest degraded areas, raise awareness about environmental sustainability, and empower local communities 
        with the knowledge and resources to protect their natural heritage for generations to come.
      </p>
    </div>
    <div className="aboutus-paragraph">
      <h2>Our Values</h2>
      <p>
        We are driven by a deep commitment to integrity, inclusivity, and environmental stewardship. 
        Collaboration is at the heart of our work, as we believe that partnerships between communities, governments, 
        and conservationists are essential to achieving lasting impact. Sustainability guides every initiative we undertake, 
        ensuring that our actions today positively shape the environment of tomorrow.
      </p>
    </div>
  </div>
</section>

    </div>
  );
}
