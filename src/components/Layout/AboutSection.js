import React, { useRef, useState } from "react";
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
          {/* <img src="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n.jpg"
            sizes="(max-width: 479px) 81vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1919px) 57vw, 100vw"
            srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n.jpg 1440w"
            alt="" class="about-image" /> */}

          <LazyLoadedImage
            src="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca417946f3048ad666230c_377506499_825469602915926_3097131784666052457_n.jpg"
            alt="fanny bag"
            className="about-image"
          />
          <div class="about-info">
            <div class="about-info-content">
              <h3 class="about-heading"> <span class="about-info-label" >About</span> Who am I</h3>
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
    </section>

  );
}

export default AboutSection;
