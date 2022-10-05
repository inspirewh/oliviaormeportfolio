//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
 
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </>
  );
}


export default App;