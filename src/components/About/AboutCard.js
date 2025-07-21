import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohomed Nawzad Naflin Ahamed </span>
            <br />
            <span className="purple">
              Frontend Developer | Data Analyst | Backend Enthusiast
            </span>
            <br />
            from <span className="purple">Sri Lanka.</span>
            <br />
            <br />
            I’m an aspiring <b className="purple">Software Engineer</b> with a strong foundation in 
            <b className="purple"> Web Development, Data Analytics, and Backend Development.</b>
            <br />
            I hold a <b className="purple">BSc (Hons) in Information Technology</b> from the University of West London.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring & Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools & technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building solutions that create impact and improve lives!"{" "}
          </p>
          <footer className="blockquote-footer">Naflin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
