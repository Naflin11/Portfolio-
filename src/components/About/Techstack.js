import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMongodb, 
  DiPython, 
  DiJava, 
  DiGit 
} from "react-icons/di";
import { 
  SiMysql, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap, 
  SiTableau, 
  SiPowerbi, 
  SiRstudio, 
  SiAdobephotoshop, 
  SiCanva, 
  SiSelenium,
  SiTestinglibrary,
  SiJira
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRstudio /></Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>

      {/* Backend & Database */}
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaDatabase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>

      {/* Data Analytics & BI */}
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>

      {/* Tools & Design */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCanva /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJira /></Col>

      {/* Testing & Automation */}
      <Col xs={4} md={2} className="tech-icons"><SiSelenium /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTestinglibrary /></Col>

    </Row>
  );
}

export default Techstack;
