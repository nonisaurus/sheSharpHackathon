import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <Container className="flex">
      <h1>Contact</h1>

      <Container className="flex-row">
        <Card className="contact-card">
          <Card.Body>
            <Card.Title>Noni</Card.Title>
            <Card.Text>
              <a href="https://www.linkedin.com/in/nonisaurus/"
                target="_blank"
                rel="noopener noreferrer"
              >LinkedIn </a>
              <br/>
              <a href="https://github.com/nonisaurus/"
                target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </Card.Text>
          </Card.Body>
        </Card>       

        <Card className="contact-card">
          <Card.Body>
            <Card.Title>Ana</Card.Title>
            <Card.Text>
              <a href="https://www.linkedin.com/in/asolcan/"
                target="_blank"
                rel="noopener noreferrer">LinkedIn</a>
              <br/>
              <a href="https://github.com/solcana/"
                target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

    </Container>
  );
}

export default Contact;


