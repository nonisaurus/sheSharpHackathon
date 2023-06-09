import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import About from './About';
import Vacancies from './Vacancies';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Logo</h1>
      <Router>
        <Navbar>
          <Container>
            <Navbar.Brand><Link to="/">About</Link></Navbar.Brand>
            <Navbar.Brand><Link to="/vacancies">Vacancies</Link></Navbar.Brand>
            <Navbar.Brand><Link to="/contact">Contact</Link></Navbar.Brand>
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

