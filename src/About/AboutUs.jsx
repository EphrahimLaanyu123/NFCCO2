import React from "react";
import './AboutUs.css';
import Navbar from "../Navbar/Navbar";

function AboutUs() {
    return (
        <div className="about-us">
            <header>
                <h1>About Us</h1>
            </header>
            <section className="introduction">
                <h2>Introduction</h2>
                <p>
                    Ndoto Forest Community Conservation Organization is a registered community-based organization in Samburu North sub-county whose main objective is combating climate change through forest conservation, increasing forest cover through afforestation and reforestation within Ndoto Forest and its surrounding community. Ndoto Forest is part of the larger Ngare Ndare ecosystem and is one of the gazetted forests in the larger Samburu County. Ndoto Forest Reserve is gazetted and occupies an area of 92,796.321 Hectares. The forest is surrounded by Community Lands of a total acreage of 102,779.44 Ha.
                </p>
                <p>
                    The community living around Ndoto Forest saw the need to form a Community forest conservation organization which will seek to protect and conserve the Forest to enable it to improve the environmental, ecological, and socio-economic goods and services that it offers. Though endowed with a rich diversity of resources, the status of Ndoto Forest has continued to deteriorate due to overexploitation of forest resources as a consequence of improper regulation and enforcement of laws to utilize the resources sustainably. This has affected the capacity of the Forest to provide ecological and socio-economic goods and services, hence the need to form a Community forest conservation organization. The main objective of the Community forest conservation organization is to improve, sustain, and maintain a well-conserved forest that sustainably offers its ecological, socio-economic, and cultural products and services. Moreover, the Community forest conservation organization aims at initiating, complementing, and scaling up conservation programs in the Forest that have a bearing on biodiversity and livelihoods. The immediate objective is to involve the community, KFS, and other relevant stakeholders in the management and conservation of the Forest in realization of the vision.
                </p>
            </section>

            <section className="project-objective">
                <h2>Project Objective</h2>
                <p>
                    The main project objective is combating climate change through increasing forest cover by planting more trees (afforestation) and introducing other environmental conservation activities in the community that will both conserve the environment and sustainable use of natural resources and generate income for the community surrounding Ndoto Forest who will be part of the conservation activities.
                </p>
            </section>

            <section className="scope">
                <h2>Scope of the Project</h2>
                <p>
                    The project will cover Ndoto Forest and surrounding communities, including:
                </p>
                <ul>
                    <li>Siangan</li>
                    <li>Nguronit</li>
                    <li>Leshep</li>
                    <li>Veno</li>
                    <li>Naisunyai</li>
                    <li>Sidai</li>
                    <li>Rooso</li>
                    <li>Kasipo</li>
                    <li>Seren</li>
                    <li>Lesirikan</li>
                    <li>Ura</li>
                    <li>Loodwa</li>
                    <li>Sererit</li>
                    <li>Latakweny</li>
                    <li>Matepes</li>
                </ul>
            </section>

            <section className="governance">
                <h2>Governance and Institutional Framework</h2>
                <p>
                    The Ndoto Mountain Community forest conservation organization seeks to scale up afforestation and reforestation in the Ndoto forest and restore vegetation cover in the surrounding community, as well as improve the livelihood status of the community. The main economic activities of the community surrounding the forest mainly include small-scale crop farming and livestock farming.
                </p>
                <p>
                    <strong>Registration of the Organization:</strong> Ndoto Mountain Community forest conservation organization is a registered community organization with membership from the surrounding community of The Ndoto Mountains who are mainly small-scale farmers, small-scale traders, and pastoralists.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;