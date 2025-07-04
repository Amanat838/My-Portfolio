import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Amanat Ali </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I was recently employed as a software developer at CodeUpScale.
            <br />
            I have completed Bachelor's in Computer Science at Comsats University Islamabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve Coding Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don’t just ship features — ship value!"{" "}
          </p>
          <footer className="blockquote-footer">Amanat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
