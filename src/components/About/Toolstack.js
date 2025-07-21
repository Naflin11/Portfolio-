import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJira,
  SiGithub,
  SiPowerbi,
  SiTableau,
  SiAdobephotoshop,
  SiCanva
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      {/* Analytics & BI Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

    </Row>
  );
}

export default Toolstack;
