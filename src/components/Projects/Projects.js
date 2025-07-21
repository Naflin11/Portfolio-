import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder images
import api from "../../Assets/Projects/api.png";
import assignment from "../../Assets/Projects/assignment.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import endDb from "../../Assets/Projects/end-db.png";
import kindhive from "../../Assets/Projects/kindhive.png";
import lms from "../../Assets/Projects/lms.png";
import pickspare from "../../Assets/Projects/pickspare.png";
import salesDb from "../../Assets/Projects/sales-db.png";
import smarthire from "../../Assets/Projects/smarthire.png";
import sel from "../../Assets/Projects/sel.png";





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I’ve worked on, combining web development, data analytics, and backend services.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* SmartHire Pro – AI Recruitment Portal */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smarthire}
              isBlog={false}
              title="SmartHire Pro – AI Recruitment Portal"
              description="A full-stack recruitment platform built with React.js and Node.js. Integrated OpenAI API for AI-driven resume-job matching and secure role-based access with backend validation."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* ✅ Assignment Advisors Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assignment} 
              isBlog={false}
              title="Assignment Advisors Website"
              description="Developed the frontend of an educational consulting platform with ReactJS, ensuring a responsive and user-friendly interface. Designed interactive pages for services, projects, and contact forms, optimizing UI/UX for better engagement."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* End-to-End Sales Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={endDb}
              isBlog={false}
              title="End-to-End Sales Analysis"
              description="A complete sales analytics lifecycle using Python, MySQL, and Power BI – data cleaning, exploratory data analysis (EDA), and interactive dashboards for sales insights."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* PickSpare E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pickspare}
              isBlog={false}
              title="PickSpare E-Commerce Website"
              description="Customized and enhanced a Shopify-based e-commerce store with improved UI/UX, theme customization, and responsiveness for a seamless shopping experience."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Full E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="Built a fully functional e-commerce platform using React.js & Redux with product browsing, cart management, and order tracking on a sleek responsive UI."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* REST API Development */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="REST API with Node.js & MongoDB"
              description="Developed a CRUD API with Node.js and Express.js, integrating MongoDB as the database and implementing RESTful endpoints for backend operations."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Library Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Library Management System"
              description="A Java Swing desktop app with MySQL backend for managing library operations – book tracking, student registration, and inventory management."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Data Visualization Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesDb}
              isBlog={false}
              title="Sales Dashboards (Power BI & Tableau)"
              description="Created multiple data visualization dashboards for sales analytics using Power BI, Tableau, and Excel with dynamic filters and interactive insights."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Automation Testing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sel}
              isBlog={false}
              title="Automation Testing with Selenium"
              description="Performed automated web UI testing using Selenium WebDriver for a React-based e-commerce platform, validating user flows and functionality."
              ghLink="#"
              demoLink="#"
            />
          </Col>
           {/* ✅ KindHive Wix Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kindhive} 
              isBlog={false}
              title="KindHive – Wix Website"
              description="Built a Wix-based website for KindHive, focusing on clean UI/UX, mobile responsiveness, and smooth navigation to promote kindness-focused community initiatives."
              ghLink="https://shadzildesigns.wixsite.com/-kindhive-store"
              demoLink="https://shadzildesigns.wixsite.com/-kindhive-store"
            />
          </Col>

        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
