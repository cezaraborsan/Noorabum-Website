// Flower Section.js
import React from "react";
import "../../flowerSection.css"
import LazyLoadedImage from "../LazyLoadedImage";
import useIntersectionObserver from "../IntersectionObserver";

function FlowerSection() {

    const handleIntersection = (target) => {
        target.classList.add("visible");
    };

    const targetRef = useIntersectionObserver(handleIntersection, {
        threshold: 0.3,
    });

    return (
        <>
            <section className="flower-section" ref={targetRef}>
                <h2 className="flower-heading">Discover New Handmade Items</h2>
                <div class="flower-content">
                    <h3 className="flower-heading ">Resin Flower Preservation</h3>
                    <div class="flower-grid">
                        <div class="flower-info">
                            <div class="flower-info-content">
                                <p class="flower-paragraph">As I start exploring new ways to express my creativity, I've begun making handmade treasures. One thing I'm really excited about is preserving flowers in resin.</p>
                                <p class="flower-paragraph">In this collection, you'll discover coaster holders adorned with dried flowers that I've carefully chosen and preserved. These flowers have been selected for their beauty and uniqueness, and I've encased them in resin to capture their charm forever.</p>

                            </div>
                            <LazyLoadedImage
                                src="./images/flower-img3.jpeg"
                                alt="fanny bag"
                                className="about-image"
                                loading="lazy"
                            />

                        </div>
                        <div>
                            <LazyLoadedImage
                                src="./images/flower-img1.jpeg"
                                alt="fanny bag"
                                className="about-image"
                                loading="lazy"
                            />

                            <p class="flower-paragraph flower-paragraph-bigger"> Keep an eye out for thrilling updates as we further explore and enhance our collection together.</p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default FlowerSection;