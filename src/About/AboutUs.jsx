import React from "react";
import './AboutUs.css';
import Navbar from "../Navbar/Navbar";

function AboutUs() {
    return (
    <div className="about-us">
        <div className="projects-top">
            <Navbar />
            <div className="projects-header">
                <ul className="nav-button-container">
                    <li><a href="../">Home</a></li>
                    <li>|</li>
                    <li> <a href="../about">About</a></li>
                </ul>  
                <div>
                    <h2 className="main-heading">ABOUT US</h2>  
                </div> 
            </div>
        </div>    
                
    
    
    <section className="section-classes section-0">
        <div class=" paragraph-container">                   
            <img className="woman-image" src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497" alt="" /> 
            <div className="section-paragraph">
                <h2>Introduction</h2>                                     
                <p className="paragraph paragraph-1">
                Ndoto Forest Community Conservation Organization is a registered community-based organization in <span className="bold-text">Samburu North </span>sub-county whose main objective is combating climate change through forest conservation, increasing forest cover through afforestation and reforestation within Ndoto Forest and its surrounding community. Ndoto Forest is part of the larger <span className="bold-text">Ngare Ndare</span> ecosystem and is one of the gazetted forests in the larger Samburu County. Ndoto Forest Reserve is gazetted and occupies an area of <span className="bold-text">92,796.321 Hectares</span> . The forest is surrounded by Community Lands of a total acreage of <span className="bold-text">102,779.44 Ha.</span>
                </p> 
            </div>                    
        </div>

    </section>
    
    <section className="section-classes section-1">  
        <div class="paragraph-container">
            <div className="section-paragraph">
                <h2>Why NFCCO</h2>  
                <p className="paragraph paragraph-2">
                The community living around Ndoto Forest saw the need to form a Community forest conservation organization which will seek to protect and conserve the Forest to enable it to improve the environmental, ecological, and socio-economic goods and services that it offers. Though endowed with a rich diversity of resources, the status of Ndoto Forest has continued to deteriorate due to overexploitation of forest resources as a consequence of improper regulation and enforcement of laws to utilize the resources sustainably. This has affected the capacity of the Forest to provide ecological and socio-economic goods and services, hence the need to form a Community forest conservation organization.
                </p>
                <div className="button">
                    <button
                    className="gallery-button"
                    aria-label="View our gallery"
                    onClick={() => window.location.href = 'gallery'}
                    >
                    View Gallery
                    </button>
                </div>                            
            </div>
            <img className="woman-image" src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497" alt="" />        
        </div>
    </section>

    <section className="section-classes section-2">
        <div class="paragraph-container">
            <div className="section-paragraph">
                <h2 className="section-2-heading">Project Objective</h2>
                <p className="paragraph paragraph-3">
                The main project objective is <span className="bold-text">combating climate change </span>through increasing forest cover by planting more trees (afforestation) and introducing other environmental conservation activities in the community that will both conserve the environment and sustainable use of natural resources and generate income for the community surrounding Ndoto Forest who will be part of the conservation activities.
                Moreover, the Community forest conservation organization aims at initiating, complementing, and scaling up conservation programs in the Forest that have a bearing on biodiversity and livelihoods. The immediate objective is to involve the community, KFS, and other relevant stakeholders in the management and conservation of the Forest in realization of the vision.
                </p>

                <div className="button">
                    <button
                    className="projects-button"
                    aria-label="View our projects"
                    onClick={() => window.location.href = 'projects'}
                    >
                    Our Projects
                    </button>
                </div> 

            </div>
            <img className="woman-image" src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497" alt="" />    
        </div>                
    </section>

            

    <section className="section-classes section-3">
        <h2 className="section-3-heading">Scope of the Project</h2>
            <p className="section-3-paragraph">The project will cover Ndoto Forest and surrounding communities, including:</p>              
                <div className="section-list">
                    <div>
                        <ul class="communities">
                        <li>Siangan</li>
                        <li>Nguronit</li>
                        <li>Leshep</li>
                        <li>Veno</li>
                        <li>Naisunyai</li>
                        <li>Sidai</li>
                        <li>Rooso</li>
                    </ul>
                    </div>
                    
                    <div>
                        <ul class="communities">
                        <li>Kasipo</li>
                        <li>Seren</li>
                        <li>Lesirikan</li>
                        <li>Ura</li>
                        <li>Loodwa</li>
                        <li>Sererit</li>
                        <li>Latakweny</li>
                        <li>Matepes</li>
                    </ul>
                    </div>                
                <img className="woman-image" src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497" alt="" />
              </div>
              
    </section>

    <section className="section-classes section-4">
        <h2>Governance and Institutional Framework</h2>
        <p>
        Ndoto Mountain Community forest conservation organization is a registered community organization with membership from the surrounding community of The Ndoto Mountains who are mainly small-scale farmers, small-scale traders, and pastoralists.
        The Ndoto Mountain Community forest conservation organization seeks to scale up afforestation and reforestation in the Ndoto forest and restore vegetation cover in the surrounding community, as well as improve the livelihood status of the community. The main economic activities of the community surrounding the forest mainly include small-scale crop farming and livestock farming.
        </p>
        <p>
        The Ndoto Forest Community Conservation Organization operates under a governance structure that involves community participation, partnerships with Kenya Forest Service (KFS), and collaboration with other stakeholders. The framework includes:
        </p>
        <ul>
            <li>Membership: Community members from Ndoto Mountain, including farmers, traders, and pastoralists.</li>
            <li>User Groups: Formed to facilitate training and manage conservation activities.</li>
        </ul>
        
        
    </section>

    <section className="section-classes section-5">
        <h2>Benefits of the Project</h2>
        <div className="cards-container-main">
            <div className="cards-container">
                {/* Environmental Impact */}
                <div className="card">
                    <h3>Environmental Impact</h3>
                    <ul>
                        <li>Increased forest cover</li>
                        <li>Conservation of biodiversity and water towers</li>
                        <li>Mitigation of climate change effects</li>
                    </ul>
                </div>

                {/* Economic Impact */}
                <div className="card">
                    <h3>Economic Impact</h3>
                    <ul>
                        <li>Improved livelihoods through sustainable income-generating activities (beekeeping, aloe farming)</li>
                        <li>Creation of employment opportunities</li>
                    </ul>
                </div>
        
                {/* Social Impact */}
                <div className="card">
                    <h3>Social Impact</h3>
                    <ul>
                        <li>Enhanced community cohesion through collective participation</li>
                        <li>Empowerment through training in enterprise and leadership skills</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="section-classes section-6">
        <h2>Expected Outcomes</h2>
        <ul>
          <li>A well-conserved forest offering sustainable ecological, socio-economic, and cultural benefits</li>
          <li>Increased forest cover within and around Ndoto Forest</li>
          <li>Improved livelihoods for surrounding communities</li>
          <li>Strengthened community capacity to manage and sustain conservation efforts</li>
        </ul>
    </section>

    <section className="section-classes section-7">
        <h2>Conclusion</h2>
        <p>
          The Ndoto Forest Community Conservation Organization is committed to conserving Ndoto Forest’s ecosystem while addressing the socio-economic needs of the surrounding communities. By integrating conservation with sustainable livelihoods, the organization aims to achieve long-term environmental and community resilience.
        </p>
    </section>  

    </div>
    );
}

export default AboutUs;