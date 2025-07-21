import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeMainImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* ✅ Left Section - Text */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Software Engineer</b> with a strong foundation in{" "}
              <b className="purple">Web Development, Data Analytics, and Backend Services.</b>
              <br />
              <br />
              I’m skilled in{" "}
              <i>
                <b className="purple">React.js, Node.js, Java, Python, and SQL</b>
              </i>{" "}
              and love building scalable web apps, interactive dashboards, and APIs.
              <br />
              <br />
              My interests include creating{" "}
              <i>
                <b className="purple">modern web technologies and data-driven products</b>
              </i>{" "}
              to improve user experience and business insights.
              <br />
              <br />
              I also enjoy working with{" "}
              <b className="purple">Power BI, Tableau, MongoDB,</b> and{" "}
              <i>
                <b className="purple">REST APIs</b>
              </i>{" "}
              while exploring new tools for <b className="purple">automation & analytics.</b>
            </p>
          </Col>

          {/* ✅ Right Section - Home Main Image with Tilt Effect */}
          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <img src={homeMainImg} className="img-fluid" alt="home main illustration" />
            </Tilt>
          </Col>
        </Row>

        {/* ✅ Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* ✅ GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/Naflin11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* ✅ LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naflin-ahmed-a863772a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* ✅ Instagram */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam.naflin_?igsh=MWRuNmlyN3AxdjJmMA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              {/* ✅ Email */}
              <li className="social-icons">
                <a
                  href="mailto:naflinahmed11@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>

            {/* ✅ Phone number with custom font style */}
            <p
              style={{
                marginTop: "15px",
                color: "#fff",
                fontSize: "1.2rem",
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "600",
                letterSpacing: "1px"
              }}
            >
               +94 77 580 3064
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
