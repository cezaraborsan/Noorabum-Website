import React, { useState } from "react";
import useIntersectionObserver from "../IntersectionObserver";
import { Link } from 'react-router-dom';

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
      <section className="navbar-wrapper" ref={targetRef}>
        <nav className="site-navbar">
          <Link to="/" className="logo" onClick={toggleMenu}>
            <img src="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png"
              loading="lazy" width="32" sizes="(max-width: 479px) 40px, 32px" alt=""
              srcSet="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo-p-500.png 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png 858w"
              className="image-logo" />
          </Link>
          <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}  >
            <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={toggleMenu}>Collections</Link></li>
            <li><Link to="/aboutus" className="nav-link" onClick={toggleMenu}>About</Link></li>
            <li>
              <div className="contact-button">
                <Link to="/order" className="button-primary" onClick={toggleMenu}>Contact</Link>
              </div>
            </li>
          </ul>
          <button className={`nav-toggler ${isMenuOpen ? 'toggler-open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
