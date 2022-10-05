import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoLiv from '../assets/img/logo-liv.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/oliviaportfolio/">
                    <img src={logoLiv} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link to="/oliviaportfolio/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
                <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Link>
                <Link to="/resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Link>
                <Link to="/portfolio" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>My Work</Link>

                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""/></a>
                        <a href="#"><img src={navIcon2} alt=""/></a>
                    </div>
                    <Link to="/contact">
                        <button >Let’s Chat <ArrowRightCircle size={25} /></button>
                    </Link>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )

}