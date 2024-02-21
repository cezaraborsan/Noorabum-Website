import React from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../IntersectionObserver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <div className="site-footer">
      <section className="footer" ref={targetRef}>
        <div className="footer-wrapper">
          <div className="footer-container">
            <a href="/" className="footer-logo">
              <img
                src="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png"
                loading="lazy"
                width="60"
                sizes="60px"
                alt="Noorabum Logo"
                srcSet="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo-p-500.png 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png 858w"
                className="footer-logo-image"
              />
            </a>
            <div className="footer-links">
              <div className="footer-block">
                <h6 className="footer-title">Company</h6>
                <Link to="/aboutus" className="footer-link" >About us</Link>
                <Link to="/about" className="footer-link" >Our Products</Link>
              </div>
              <div className="footer-block">
                <h6 className="footer-title">Quick Link</h6>
                <Link to="/order" className="footer-link" >Contact</Link>
                <Link to="/order" className="footer-link" >Order Information</Link>
              </div>
              <div className="footer-block">
                <h6 className="footer-title">Follow us</h6>
                <div className="footer-social-block">
                  <a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
                  </a>
                  <a href="https://www.facebook.com/people/Noorabum/100063586802344/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
                  </a>
                  <a href="https://www.tiktok.com/@silvialucutar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} aria-label="TikTok" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
