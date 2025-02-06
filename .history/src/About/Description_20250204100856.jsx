import React from 'react';
import "./Description.css"
import aboutusimage from "/home/user/nfcco/src/assets/AboutPage/_KGP5796.JPG";

export default function Description() {
  return (
    <div className="aboutus-artcile flex">
      <section className="aboutus-artcile-top">
        <section className='aboutus-artcile-top-1'>
          <p>TRANSFORMING NDOTO ONE TREE AT A TIME THROUGH NDOTO FOREST</p>
          <img src={aboutusimage} alt="" />
          <p>Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.</p>

      </section>

      <section className="aboutus-article-bottom">

      </section>
    </div>
  );
}
