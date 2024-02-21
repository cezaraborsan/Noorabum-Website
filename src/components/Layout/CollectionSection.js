import React, { useRef, useState } from "react";
import IntersectionObserver from "../IntersectionObserver";
import { Link } from 'react-router-dom';

function CollectionSection() {

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <div class="collection-section" ref={targetRef}>
      <div class="collection-overlay"></div>
      <div class="collection-container">
        <div class="collection-info">
          <h2 class="collection-heading">Collections</h2>
          <div class="collection-paragraph">
            <div class="collection-text">Take a closer look at the variety of collections we have to offer, all made in collaboration with amazing local artists. Explore the unique creations and find something special that resonates with you.</div>
          </div>
          <Link to="/about" className="collection-link">Discover Now</Link>
        </div>
      </div>
    </div>
  );
}

export default CollectionSection;
