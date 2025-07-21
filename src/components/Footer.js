import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* ✅ Left side - Designed by */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Naflin</h3>
        </Col>

        {/* ✅ Center - Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Naflin</h3>
        </Col>

        {/* ✅ Right side - Social Icons + Mail + Phone */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* ✅ GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Naflin11"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* ✅ LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/naflin-ahmed-a863772a4/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* ✅ Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/iam.naflin_?igsh=MWRuNmlyN3AxdjJmMA%3D%3D&utm_source=qr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            {/* ✅ Email */}
            <li className="social-icons">
              <a
                href="mailto:naflinahmed11@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Send me an email"
              >
                <AiOutlineMail />
              </a>
            </li>

            {/* ✅ Phone */}
            <li className="social-icons">
              <a
                href="tel:+94775803064"
                style={{ color: "white" }}
                title="Call me"
              >
                <AiOutlinePhone />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
