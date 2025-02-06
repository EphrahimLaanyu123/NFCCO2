import React from 'react';
import "./Description.css";

export default function Description() {
  return (
    <div className="ndoto-description-container flex">
      <header className='ndoto-title'>
        Who we are
      </header>
      <article className="ndoto-content-wrapper">
        <p className="ndoto-description-text">
          Ndoto Forest Community Conservation Organization combats climate change through forest conservation, afforestation, and community engagement, promoting biodiversity, sustainable resource use, and improved livelihoods in Samburu North Sub-County, Kenya.
        </p>
      </article>
    </div>
  );
}
