import React from "react";
// import IntersectionObserver from "../IntersectionObserver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Parallax } from 'react-parallax';

function ContactSection() {

  // const handleIntersection = (target) => {
  //   target.classList.add("visible");
  // };

  // const targetRef = IntersectionObserver(handleIntersection, {
  //   threshold: 0.3,
  // });
  return (
    <Parallax bgImage="../images/contact-us.png" strength={300} blur={2}>
      <div class="">
        <div class="collection-overlay"></div>
        <div class="collection-container">
          <div class="collection-info">
            <h3 class="collection-heading">Join us on Instagram</h3>
            <div className="collection-paragraph">
              <div className="collection-text">Come join us on Instagram! See more pics, stay updated on our collections, and be part of our community. Follow us now for daily inspiration! #FollowUs #StayUpdated #Instagram</div>
            </div>
            <div class="collection-button"><a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noreferrer" class="collection-link"> <FontAwesomeIcon icon={faInstagram} className="instagram-icon" /> <span>noorabum</span></a></div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default ContactSection;
