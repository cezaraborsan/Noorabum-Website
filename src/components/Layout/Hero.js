import React from "react";
import LazyLoadedImage from "../LazyLoadedImage";
import useIntersectionObserver from "../IntersectionObserver";
import { Link } from 'react-router-dom';

export default function Hero() {

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <section class="hero-wrapper" ref={targetRef}>
      <div class="hero-content">
        <div class="hero-grid">
          <div class="hero-info">
            <h1 class="hero-heading">
              Noorabum. <br /></h1>
            <div class="hero-paragraph">
              Noorabum, a
              brand distinguished by its artfully crafted
              handmade bags, emerges from a daring concept and a spirit brimming with hope.
            </div>
            <div class="main-button">
              <div class="button-wrapper">
                <Link to="/about" class="button-primary">Our
                  Products</Link>
              </div>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <LazyLoadedImage
              src="images/hero-img.jpg"
              alt="Header image"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section >
  );
}
