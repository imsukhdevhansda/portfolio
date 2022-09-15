import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nordstrom from "../../Assets/Projects/nordstrom.png";
import zee5Clone from "../../Assets/Projects/zee5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nordstrom}
              isBlog={false}
              title="NORDSTROM ECOMMERCE CLONE"
              description="Nordstrom is an E-commerce website from Seattle, WA. A leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. It was a collaborative project. Cloned within a duration of 4 days."
              ghLink="https://github.com/LaxmiWavale/NordStrom_clone"
              demoLink="https://laxmiwavale.github.io/NordStrom_clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zee5Clone}
              isBlog={false}
              title="ZEE5 CLONE"
              description="At Zee5, the online video streaming Over The Top (OTT) platform. That’s where Zee5 brings in the advantage of the language of your comfort! With 12 navigational and featured languages across original features. It was a collaborative project. Cloned within a duration of 4 days."
              ghLink="https://github.com/LaxmiWavale/ZEE5_clone"
              demoLink="https://laxmiwavale.github.io/ZEE5_clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
