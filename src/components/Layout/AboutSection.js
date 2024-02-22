import React from "react";
import "../../homePageAboutMeSection.css"
import LazyLoadedImage from "../LazyLoadedImage";
import useIntersectionObserver from "../IntersectionObserver";
import { Link } from 'react-router-dom';


function AboutSection() {

  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });


  return (
    <section class="about-section" ref={targetRef}>
      <div class="about-content">
        <div class="about-grid">
          <LazyLoadedImage
            src="./images/about-me-img.jpeg"
            alt="fanny bag"
            className="about-image"
          />
          <div class="about-info">
            <div class="about-info-content">
              <h3 class="about-heading"> <span class="section-label" >About</span> Who am I</h3>
              <p class="about-paragraph">My name is Silvia, the person behind this page. Noorabum came
                to
                life three years ago in a small village in Suceava, alongside my mother, from whom I
                inherited the craft. Now, I continue my work in Brasov. I started by creating bags
                from
                materials found in my mother&#x27;s workshop, and gradually expanded to personalized
                collaborations with artists.</p>

              <div class="main-button">
                <div class="button-wrapper">
                  <Link to="/aboutus" class="button-primary">Find out more</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >

  );
}

export default AboutSection;
