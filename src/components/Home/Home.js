import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Sukhdev Hansda</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

        </Container>
      </Container>

      <a
        href="https://drive.google.com/file/d/1w0Gc9pTrgpZwUssYLrTBu7AW3Mn1WLOl/view?usp=sharing"
        target="_blank"
        download="resume.pdf"
        style={{marginLeft:"10%"}}
      >
        <Button
          className="fork-btn-inner"
          style={{ fontSize: "1.2em",borderRadius:"10px"}}
        >
          Get Resume
        </Button>
      </a>

      <Home2 />
    </section>
  );
}

export default Home;
