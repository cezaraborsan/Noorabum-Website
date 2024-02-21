import React from "react";
import IntersectionObserver from "../IntersectionObserver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });
  return (
    <div class="contact-section" ref={targetRef}>
      <div class="collection-overlay"></div>
      <div class="collection-container">
        <div class="collection-info">
          <h3 class="collection-heading">Join us on Instagram</h3>
          <div class="collection-button"><a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noreferrer" class="collection-link"> <FontAwesomeIcon icon={faInstagram} className="instagram-icon" /> <span>noorabum</span></a></div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
