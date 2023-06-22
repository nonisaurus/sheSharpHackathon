import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import About from "./About";
import Vacancies from "./Vacancies";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar className="navbar navbar-expand-sm" collapseOnSelect expand="lg" sticky="top" >
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
