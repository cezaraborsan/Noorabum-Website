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
                <div class="flower-content">
                    <div class="flower-grid">
                        <div class="flower-info">
                            <h3 class="flower-heading"> <span class="section-label" >Discover New Handmade Items</span>Flowers Preservation</h3>
                            <div class="flower-info-content">
                                <p class="flower-paragraph">As I start exploring new ways to express my creativity, I've begun making handmade treasures. I found something I'm really excited about: preserving flowers in resin.</p>
                                {/* <p class="flower-paragraph">In this collection, you'll discover coaster holders adorned with dried flowers that I've carefully chosen and preserved. These flowers have been selected for their beauty and uniqueness, and I've encased them in resin to capture their charm forever.</p> */}

                            </div>
                        </div>
                        <LazyLoadedImage
                            src="./images/flower-img1.png"
                            alt="fanny bag"
                            className="flower-image flower-image-translate"
                            loading="lazy"
                        />
                        <LazyLoadedImage
                            src="./images/flower-img2.png"
                            alt="fanny bag"
                            className="flower-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default FlowerSection;