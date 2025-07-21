import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experienceData = [
    {
      title: "Digital Marketing & Data Analyst",
      company: "Shadzil Digital Marketing",
      location: "Sri Lanka",
      duration: "2024 - 2025",
      points: [
        "Created and managed social media content while analyzing performance metrics (reach, impressions, clicks) using Excel, Meta Insights, and Google Analytics to refine strategies and boost engagement.",
        "Developed visual reports and dashboards to communicate campaign outcomes and collaborated with teams to optimize content based on audience behavior and data trends."
      ]
    },
    {
      title: "EPOS Data Management and Social Media Management",
      company: "SMEBIZNESS",
      location: "United Kingdom",
      duration: "2023 - 2024",
      points: [
        "Handled EPOS data entry and maintained accuracy in databases.",
        "Created EPOS systems for multiple restaurants, ensuring seamless order management and payment processing.",
        "Performed software installation, maintenance, and troubleshooting, resolving critical bugs to enhance system stability.",
        "Supported social media campaigns and conducted post creation for marketing and brand engagement."
      ]
    },
    {
      title: "Freelance Frontend Developer",
      company: "Freelance",
      location: "",
      duration: "2024 - Present",
      points: [
        "Designed and developed responsive frontend interfaces for various clients, ensuring seamless user experiences.",
        "Customized and enhanced Shopify themes and React-based websites, focusing on UI/UX improvements.",
        "Worked with ReactJS, JavaScript, HTML, CSS, Tailwind CSS, Shopify Liquid, and Theme Customization to deliver high-quality web solutions."
      ]
    },
    {
      title: "Data Analyst",
      company: "Freelance",
      location: "",
      duration: "2024 - Present",
      points: [
        "Created dashboards using Power BI, Excel, and Tableau for data visualization.",
        "Designed and optimized dynamic reports with interactive filters and data storytelling techniques to improve business decision-making."
      ]
    },
    
  ];

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
          My <strong className="purple">Experience</strong>
        </h1>

        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "10px",
              marginBottom: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              textAlign: "center" // Center the title & company block
            }}
          >
            {/* ✅ Centered Job Title */}
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>{exp.title}</h3>

            {/* ✅ Centered Company | Location | Duration */}
            <h5 style={{ color: "#c084f5", marginBottom: "15px" }}>
              {exp.company}
              {exp.location ? ` | ${exp.location}` : ""} 
              {` | ${exp.duration}`}
            </h5>

            {/* ✅ Left-aligned Description */}
            <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "90%" }}>
              <ul style={{ color: "#ccc", paddingLeft: "20px", marginBottom: "0" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
