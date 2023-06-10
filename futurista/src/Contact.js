import React from "react";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Noni</Card.Title>
          <Card.Text>
            <a
              href="https://www.linkedin.com/in/nonisaurus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/nonisaurus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Ana</Card.Title>
          <Card.Text>
            <a
              href="https://www.linkedin.com/in/asolcan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/solcana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;


