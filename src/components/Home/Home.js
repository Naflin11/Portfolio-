import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// ✅ Import avatar (with Tilt effect)
import myAvatar from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* ✅ Left side: Text + Typewriter */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAFLIN Ahamed</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* ✅ Right side: Avatar with Tilt Effect */}
            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={2500}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                style={{
                  display: "inline-block",
                  width: "100%",
                  maxWidth: "450px",
                }}
              >
                <img
                  src={myAvatar}
                  alt="avatar"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ✅ Keep the Home2 section below */}
      <Home2 />
    </section>
  );
}

export default Home;
