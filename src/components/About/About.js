import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  // ✅ Direct Google Drive download link (forces download)
  const googleDriveDownload =
    "https://drive.google.com/uc?export=download&id=1Fxi-8b9vAHoxojmJKCwWd42KnJXLdE6T";

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* ✅ About Info */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

    
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ✅ One single Download button (Google Drive) */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={googleDriveDownload}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Row>
        
      </Container>
    </div>


        {/* ✅ Professional Skillset */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        {/* ✅ Tools I Use */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* ✅ GitHub section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
