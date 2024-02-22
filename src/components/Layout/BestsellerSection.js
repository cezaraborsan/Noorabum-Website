import React from "react";
import "../../bestsellerSection.css"
import LazyLoadedImage from "../LazyLoadedImage";
import useIntersectionObserver from "../IntersectionObserver";

function BestsellerSection() {

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <section class="bestseller-section" ref={targetRef}>
      <div class="bestseller-container">
        <h3 class="bestseller-heading"> <span className="section-label">Discover</span>Bestseller</h3>
        <div class="bestseller-products">
          <div class="w-slider-mask bestseller-flex">
            <div class="bestseller-product">
              <div class="product-block">
                <div class="content">
                  <div class="content-overlay"></div>
                  <LazyLoadedImage
                    src="./images/bestseller-harceapacea.jpeg"
                    alt="fanny bag"
                    className="collection-thumbnail content-image"
                  />
                  <div class="content-details fadeIn-top">
                    <h5>Harceapacea</h5>
                    <p class="product-paragraph">40€</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bestseller-product">
              <div class="product-block">
                <div class="content">
                  <div class="content-overlay"></div>
                  <LazyLoadedImage
                    src="./images/bestseller-beahopes.jpeg"
                    alt="fanny bag"
                    className="collection-thumbnail content-image"
                  />
                  <div class="content-details fadeIn-top">
                    <h5>Beahopes</h5>
                    <p class="product-paragraph">45€</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bestseller-product">
              <div class="product-block">
                <div class="content">
                  <div class="content-overlay"></div>
                  <LazyLoadedImage
                    src="./images/bestseller-grafo.jpeg"
                    alt="fanny bag"
                    className="collection-thumbnail content-image"
                  />
                  <div class="content-details fadeIn-top">
                    <h5>Grafo</h5>
                    <p class="product-paragraph">40€</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestsellerSection;
