import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GitHub Projects</strong>
      </h1>
      <p style={{ color: "white", textAlign: "center" }}>
        I actively work on personal projects, client work, and learning repos.
        Check out my <a href="https://github.com/Naflin11" target="_blank" rel="noreferrer" className="purple">
        GitHub profile</a> for more!
      </p>
    </Row>
  );
}

export default Github;
