import React, { useState } from "react";
import "../../navbar.css"
import useIntersectionObserver from "../IntersectionObserver";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'toggler-open' : ''}`}>
      <div className="navbar-wrapper" ref={targetRef}>
        <nav className="site-navbar">
          <Link to="/" className="logo" onClick={toggleMenu}>
            <img src="./images/footer-logo.png"
              loading="lazy" width="32" sizes="(max-width: 479px) 40px, 32px" alt="nav bar logo"
              className="image-logo" />
          </Link>
          <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}  >
            <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={toggleMenu}>Collections</Link></li>
            <li><Link to="/aboutus" className="nav-link" onClick={toggleMenu}>About</Link></li>
            <li>
              <div className="contact-button">
                <Link to="/order" className="button-primary nav-contact-button" onClick={toggleMenu}>Contact</Link>
              </div>
            </li>
            <li> <div className="navbar-social-block">
              <a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
              </a>
              <a href="https://www.facebook.com/people/Noorabum/100063586802344/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
              </a>
              <a href="https://www.tiktok.com/@silvialucutar" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} aria-label="TikTok" />
              </a>
            </div></li>
          </ul>
          <button className={`nav-toggler ${isMenuOpen ? 'toggler-open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
