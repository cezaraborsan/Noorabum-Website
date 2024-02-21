import React from "react";
import useIntersectionObserver from "../IntersectionObserver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

function Footer() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });


  return (
    <div className="site-footer" >
      <section className="footer" ref={targetRef}>
        <div className="footer-wrapper">
          <div className="footer-container">
            <a href="#" className="footer-logo">
              <img
                src="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png"
                loading="lazy"
                width="60"
                sizes="60px"
                alt=""
                srcSet="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo-p-500.png 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65cbc8dc1835f949da87711b_logo.png 858w"
                className="footer-logo-image"
              />
            </a>
            <div className="footer-links">
              <div className="footer-block">
                <h6 className="footer-title">Company</h6>
                <Link to="/aboutus" className="footer-link">About us</Link>
                <Link to="/about" className="footer-link">Our Products</Link>
              </div>
              <div className="footer-block">
                <h6 className="footer-title">Quick Link</h6>
                <Link to="/order" className="footer-link">Contact</Link>
                <Link to="/order" className="footer-link">Order Information</Link>
              </div>
              <div className="footer-block">
                <h6 className="footer-title">Follow us</h6>
                <div className="footer-social-block">

                  <a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://www.facebook.com/people/Noorabum/100063586802344/" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faFacebookF} /> </a>
                  <a href="https://www.tiktok.com/@silvialucutar" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTiktok} /></a>

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
