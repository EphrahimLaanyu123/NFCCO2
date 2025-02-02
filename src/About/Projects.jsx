import React, { useState } from "react";
import "./Projects.css";
import dropdown from "../assets/AboutPage/arrow_drop_down_100dp_5F6368_FILL0_wght400_GRAD0_opsz48.svg";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null); // state to track active card

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // toggle active card
  };

  return (
    <div className="projects-container">
      <div className="projects-top">
        <div className="projects-header">
          <h1>HOME | ABOUT | PROJECTS</h1>
          <h2>PROJECTS</h2>
        </div>
      </div>
      <div className="projects-bottom">
        <div className="projects-bottom-top">
          <p>The Ndoto Forest Community Conservation Organization (NFCCO) is dedicated to improving the environmental health of Ndoto Forest and the surrounding communities. By promoting sustainable development practices, the organization aims to empower local communities while conserving the environment for future generations. The projects outlined below focus on addressing deforestation, promoting biodiversity, enhancing community livelihoods, and fostering eco-tourism. These projects are designed to create long-term impact through active community involvement and sustainable practices.</p>
        </div>
        <div className="projects-list">
        <div className="project-card" onClick={() => toggleDescription(0)}>
        <div className="project-title">
          <h3>COMMUNITY MOBILIZATION</h3>
          <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
        </div>
        {activeIndex === 0 && (
          <>
            <p>
              Through local Chiefs, assistant Chiefs, Nyumba Kumi leaders, and other influential community figures, the community will be mobilized for regular meetings and discussions.
            </p>
            <p>
              These gatherings will provide a platform for the organization to communicate its vision, objectives, and plans while also encouraging open dialogue with the community.
            </p>
            <h4>Objectives:</h4>
            <ul>
              <li>Empower local residents to understand the significance of the organization's activities.</li>
              <li>Encourage collective responsibility for the success of the projects.</li>
              <li>Ensure active involvement in every stage of the project, from planning to execution.</li>
            </ul>
            <h4>Expected Outcomes:</h4>
            <ul>
              <li>Increased community engagement in decision-making.</li>
              <li>Stronger collaboration between local leadership and the organization.</li>
            </ul>
          </>
        )}
      </div>

          <div className="project-card" onClick={() => toggleDescription(1)}>
            <div className="project-title">
              <h3>Community Sensitization and Awareness Creation</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 1 && (
              <>
                <p>
                  In this project, the primary focus is on educating pastoralists and small-scale farmers around Ndoto Mountain on the importance of forest conservation.
                </p>
                <p>
                  Many local residents are dependent on the land for their livelihood and may not be fully aware of the long-term consequences of unsustainable farming practices. This program aims to bridge that gap by providing comprehensive training on sustainable farming techniques that reduce environmental degradation.
                </p>
                <h4>Key Training Areas:</h4>
                <ul>
                  <li>Sustainable farming practices to reduce environmental damage.</li>
                  <li>Soil fertility and water conservation techniques.</li>
                  <li>Alternative income-generating activities to reduce pressure on forests.</li>
                </ul>
                <h4>Expected Impact:</h4>
                <ul>
                  <li>Increased awareness of the importance of forest conservation.</li>
                  <li>Improved agricultural practices that benefit both farmers and the environment.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(2)}>
            <div className="project-title">
            <h3>Afforestation and Reforestation</h3>
            <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 2 && (
              <>
                <p>
                  This project is dedicated to reversing the effects of deforestation by focusing on the large-scale planting of indigenous trees.
                </p>
                <p>
                  Deforestation, driven by logging, land conversion for agriculture, and the use of wood as fuel, has significantly depleted forests around Ndoto Mountain. The afforestation and reforestation efforts will focus on restoring these critical ecosystems, which are essential for water conservation, biodiversity, and carbon sequestration.
                </p>
                <h4>Core Activities:</h4>
                <ul>
                  <li>Planting native tree species to restore lost habitats.</li>
                  <li>Promoting forest regeneration and ecosystem restoration.</li>
                  <li>Involving local communities in planting and maintaining trees.</li>
                </ul>
                <h4>Long-Term Goals:</h4>
                <ul>
                  <li>Restoration of biodiversity and wildlife habitats.</li>
                  <li>Reduction in carbon emissions through increased tree coverage.</li>
                  <li>Improved local climate resilience.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(3)}>
            <div className="project-title">
              <h3>Alternative Building Materials</h3> 
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 3 && (
              <>
                <p>
                  The dependence on forest products for construction, particularly timber and firewood, has led to widespread deforestation around Ndoto Mountain. In response, this project introduces alternative, sustainable building materials.
                </p>
                <p>
                  By exploring locally available, eco-friendly materials such as bamboo, compressed earth blocks, and recycled materials, the project aims to reduce the community's reliance on traditional timber-based construction methods.
                </p>
                <h4>Alternative Materials to Be Used:</h4>
                <ul>
                  <li>Bamboo as a renewable and sustainable building material.</li>
                  <li>Compressed earth blocks as an eco-friendly and durable construction solution.</li>
                  <li>Recycled materials to reduce waste and promote sustainability.</li>
                </ul>
                <h4>Benefits:</h4>
                <ul>
                  <li>Reduction in deforestation caused by timber extraction.</li>
                  <li>Lower environmental impact through the use of eco-friendly materials.</li>
                  <li>Cost-effective and sustainable building solutions for the local community.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(4)}>
            <div className="project-title">
              <h3>Water Conservation Projects</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 4 && (
              <>
                <p>
                  This initiative aims to implement various water conservation techniques to ensure a sustainable water supply for both local communities and agriculture.
                </p>
                <p>
                  The projects will include the construction of rainwater harvesting systems, promotion of water-efficient farming techniques, and the rehabilitation of local water sources.
                </p>
                <h4>Water-Saving Techniques:</h4>
                <ul>
                  <li>Rainwater harvesting to reduce dependence on natural water sources.</li>
                  <li>Efficient irrigation methods to reduce water wastage in agriculture.</li>
                  <li>Water recycling systems to optimize available water resources.</li>
                </ul>
                <h4>Expected Outcomes:</h4>
                <ul>
                  <li>Increased water availability for both domestic and agricultural use.</li>
                  <li>Improved water quality and reduced waterborne diseases.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(5)}>
            <div className="project-title">
              <h3>Youth Empowerment and Skill Building</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 5 && (
              <>
                <p>
                  This project targets the youth in the community, providing them with skills and resources that will empower them to contribute to the community's sustainable development.
                </p>
                <p>
                  Various workshops and training sessions will be organized to teach skills such as carpentry, masonry, and eco-friendly farming techniques, among others.
                </p>
                <h4>Key Training Areas:</h4>
                <ul>
                  <li>Basic carpentry and woodwork skills.</li>
                  <li>Eco-friendly farming techniques for sustainable food production.</li>
                  <li>Building skills for constructing eco-friendly homes and infrastructure.</li>
                </ul>
                <h4>Goals:</h4>
                <ul>
                  <li>Provide sustainable livelihood opportunities for the youth.</li>
                  <li>Reduce unemployment rates and improve the local economy.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(6)}>
            <div className="project-title">
              <h3>Renewable Energy Initiatives</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 6 && (
              <>
                <p>
                  This project is focused on harnessing renewable energy sources such as solar and wind to provide clean energy to local communities, reducing dependence on fossil fuels and promoting environmental sustainability.
                </p>
                <p>
                  The initiative will include the installation of solar panels in homes, schools, and community centers, as well as the introduction of small-scale wind turbines.
                </p>
                <h4>Energy Solutions:</h4>
                <ul>
                  <li>Installation of solar panels to power homes and public institutions.</li>
                  <li>Introduction of wind energy for rural electrification.</li>
                  <li>Promotion of energy-efficient technologies for local businesses and homes.</li>
                </ul>
                <h4>Expected Benefits:</h4>
                <ul>
                  <li>Reduced energy costs for local households.</li>
                  <li>Improved environmental sustainability through the use of clean energy.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(7)}>
            <div className="project-title">
              <h3>Sustainable Agriculture Practices</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 7 && (
              <>
                <p>
                  This project aims to introduce sustainable agricultural practices to local farmers, improving food security while protecting the environment.
                </p>
                <p>
                  Techniques such as crop rotation, agroforestry, and integrated pest management will be taught to increase crop yields without causing environmental harm.
                </p>
                <h4>Core Practices:</h4>
                <ul>
                  <li>Crop rotation to maintain soil fertility.</li>
                  <li>Agroforestry to combine agriculture with tree planting.</li>
                  <li>Use of natural pest control methods to minimize chemical use.</li>
                </ul>
                <h4>Outcomes:</h4>
                <ul>
                  <li>Improved soil health and increased agricultural productivity.</li>
                  <li>Reduction in the environmental impact of farming practices.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(8)}>
            <div className="project-title">
              <h3>Education and Literacy Programs</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 8 && (
              <>
                <p>
                  This project seeks to improve education and literacy rates in the region by providing accessible educational resources and training for both children and adults.
                </p>
                <p>
                  Focus will be placed on increasing school enrollment, reducing dropout rates, and providing adult education programs to improve literacy and skill development.
                </p>
                <h4>Focus Areas:</h4>
                <ul>
                  <li>Improvement of school infrastructure and learning materials.</li>
                  <li>Teacher training to enhance the quality of education.</li>
                  <li>Adult literacy programs and vocational training.</li>
                </ul>
                <h4>Expected Outcomes:</h4>
                <ul>
                  <li>Higher literacy rates among adults and children.</li>
                  <li>Increased school attendance and reduced dropout rates.</li>
                </ul>
              </>
            )}
          </div>

          <div className="project-card" onClick={() => toggleDescription(9)}>
            <div className="project-title">
              <h3>Public Health Awareness</h3>
              <img src={dropdown} alt="dropdown" className={`dropdown-icon ${activeIndex === 0 ? 'rotated' : ''}`} />
            </div>
            {activeIndex === 9 && (
              <>
                <p>
                  This project aims to improve the overall health of the community through awareness campaigns on hygiene, disease prevention, and access to healthcare services.
                </p>
                <p>
                  The initiative will include health workshops, mobile clinics, and the distribution of hygiene kits to rural areas, improving access to basic health services and information.
                </p>
                <h4>Focus Areas:</h4>
                <ul>
                  <li>Health education on nutrition, sanitation, and disease prevention.</li>
                  <li>Provision of mobile health clinics in underserved areas.</li>
                  <li>Distribution of hygiene kits to promote sanitation.</li>
                </ul>
                <h4>Impact:</h4>
                <ul>
                  <li>Improved community health and reduced disease rates.</li>
                  <li>Increased access to healthcare services and resources.</li>
                </ul>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
