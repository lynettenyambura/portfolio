import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">LynetteNyambura </span>
            from <span className="purple"> Nairobi, kenya.</span>
            <br /> I am a final year student pursuing Bsc. Business Information Technology at Dedan Kimathi University of Technology.
            <br />
            Additionally, I am fullstack developer .
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing using Figma
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lynette</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
