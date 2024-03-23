import React from "react";
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import '../../collections.css'

function CollectionSection() {
  return (
    <Parallax bgImage="../images/alcazalex-collection.jpeg" strength={300} blur={2}>
      <div className="">
        <div className="collection-overlay"></div>
        <div className="collection-container">
          <div className="collection-info">
            <h2 className="collection-heading">Collections</h2>
            <div className="collection-paragraph">
              <div className="collection-text">Take a closer look at the variety of collections we have to offer, all made in collaboration with amazing local artists. Explore the unique creations and find something special that resonates with you.</div>
            </div>
            <Link to="/about" className="collection-link">Discover Now</Link>
          </div>
        </div>
      </div>

    </Parallax>
  );
}

export default CollectionSection;
