import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import About from "./About";
import Vacancies from "./Vacancies";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar variant="dark" className="navbar calistro-font" >
          <Container>
            <Navbar.Brand>
              <Image src="../public/f_logo.png" 
              alt="logo" 
              width="30"
              height="30"
              className="d-inline-block align-top"/>
            </Navbar.Brand>
          </Container>
          <Container>
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/vacancies">Vacancies</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
