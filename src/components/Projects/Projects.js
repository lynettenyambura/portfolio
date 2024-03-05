import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SocialApp"
              description="Have features which allows user for posting pictures,following friends"
              ghLink="https://github.com/lynettenyambura/Socialapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Todo App"
              description="A simple todo app built with react.js . It allows user to add, delete and mark as done the tasks. It also has a feature to filter the tasks based on their status."
              ghLink="https://github.com/lynettenyambura/Newtodo"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense Tracker"
              description="A simple expense tracker app built with react.js . It allows user to add, delete and view the expenses. It also has a feature to filter the expenses based on their status."
              ghLink="https://github.com/lynettenyambura/Expense_tracker"
                           
            />
          </Col>

          
         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
