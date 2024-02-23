import React from "react";
import "../../homePageGallerySection.css"
import IntersectionObserver from "../IntersectionObserver";
import LazyLoadedImage from "../LazyLoadedImage";
import { Link } from 'react-router-dom';

function GallerySection() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <section class="products-section" ref={targetRef}>
      <div class="gallery-overview">
        <div class="gallery-wrapper">
          <div class="gallery-block">
            <h3 class="gallery-heading">Our Products</h3>
            <p class="gallery-paragraph">Explore our collection of environmentally conscious waist bags
              meticulously crafted from upcycled materials, showcasing a commitment to sustainability.
              Elevate
              your style with our unique waist bags adorned with water-resistant watercolor designs, each
              infused with distinctive personalities. </p>

            <div class="main-button">
              <div class="button-wrapper">
                <Link to="/order" className="button-primary" >Order Yours</Link>
              </div>
            </div>
          </div>

          <div class="gallery-grid">
            <LazyLoadedImage
              src="images/g5.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g6.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g7.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g8.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />
          </div>

          <div class="gallery-grid">
            <LazyLoadedImage
              src="images/g1.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g2.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g3.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

            <LazyLoadedImage
              src="images/g4.jpg"
              alt="fanny bag"
              className="gallery-image"
              loading="lazy"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
