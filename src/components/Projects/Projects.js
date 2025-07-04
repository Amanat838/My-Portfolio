import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Dialogflow Chatbot"
              description="An intelligent order-taking assistant built with Dialogflow and integrated with a backend database. This chatbot understands user prompts to add or remove items from an order, offers a natural conversational experience, and automatically saves orders to the database."
              ghLink="https://github.com/Amanat838/AI-Chatbot-for-food-website-using-Dialogflow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Uber App using Microservices"
              description="A scalable ride-booking platform inspired by Uber, architected using a microservices-based approach. This project breaks down core features — user authentication, ride booking and driver management— into independent services that communicate seamlessly."
              ghLink="https://github.com/Amanat838/Uber-app-using-micro-services"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LinkedIn-Post-Generator-With-GROQ"
              description="An AI-powered tool that helps you generate high-quality LinkedIn posts tailored to your chosen topic, length, language, and even your favorite influencer’s writing style. Built with a seamless UI using Streamlit, and powered by GROQ’s blazing-fast inference, it filters real post data and crafts new content with context and tone in mind."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CO2-Emission-Prediction-Using-Random-Forest-Regressor"
              description="A machine learning project that predicts vehicle CO₂ emissions based on various engine and fuel features using a Random Forest Regressor. Trained on real-world data, this model delivers accurate and reliable predictions, making it ideal for understanding the environmental impact of different car types."
              ghLink="https://github.com/Amanat838/CO2-Emission-Prediction-Using-Random-Forest-Regressor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Donation-Website-with-Crypto-payment-using-MERN"
              description="A full-stack web application that enables users to donate seamlessly using cryptocurrency, built on the powerful MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features a modern UI, secure wallet integration, and real-time donation tracking."
              ghLink="https://github.com/Amanat838/Donation-Website-with-Crypto-payment-using-MERN"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Cold-Email-Generator-Using-Langchain-and-Llama3-70b-8192"
              description="An AI-powered tool that crafts personalized, high-converting cold emails in seconds — built with LangChain, integrated with the LLaMA 3 70B model, and designed for real business use cases.
                          Just input a few key details (like target, goal, tone), and the app generates professional, tailored outreach emails instantly. Perfect for sales teams, marketers, or founders looking to scale outreach with precision and speed."
              ghLink="https://github.com/Amanat838/Cold-Email-Generator-Using-Langchain-and-Llama3-70b-8192"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
