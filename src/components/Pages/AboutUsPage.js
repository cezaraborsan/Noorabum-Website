import React from "react";
import Navbar from "../Layout/Navbar.js";
import Footer from "../Layout/Footer.js";
import "../../aboutUsPage.css";
import LazyLoadedImage from "../LazyLoadedImage";
import useIntersectionObserver from "../IntersectionObserver";


function AboutPage() {


    const handleIntersection = (target) => {
        const sectionId = target.id;

        if (sectionId === 'profileSection1') {
            target.classList.add("visible-about-section");
        } else if (sectionId === 'profileSection2') {
            target.classList.add("visible-about-section");
        } else if (sectionId === 'profileSection3') {
            target.classList.add("visible-about-section");
        };
    }

    const profileSection1Ref = useIntersectionObserver(handleIntersection, {
        threshold: 0.4,
    });

    const profileSection2Ref = useIntersectionObserver(handleIntersection, {
        threshold: 0.4,
    });

    const profileSection3Ref = useIntersectionObserver(handleIntersection, {
        threshold: 0.4,
    });


    return (
        <>
            <Navbar />
            <div className="about-me-page-wrapper">
                <div className="about-me-page">
                    <div
                        className="profile-section"
                        id="profileSection1"
                        ref={profileSection1Ref}
                    >
                        <div className="text">
                            <h2>About Me</h2>
                            <p className="profile-paragraph reused-paragraph">
                                Hi there, I'm Silvia, the creative force behind this small
                                business. In 2020, life brought me back to my childhood hometown
                                with my parents. Navigating this change, my kindergarten
                                teacher became a crucial source of moral support, encouraging me
                                to delve into my mother's craft.
                            </p>
                        </div>
                        <div className="image">

                            <LazyLoadedImage
                                className="profile-image"
                                src="./images/about-me-page-1.png"
                                alt="Profile"
                                loading="lazy"
                            />

                        </div>
                    </div>

                    <div
                        className="profile-section reverse-section"
                        id="profileSection2"
                        ref={profileSection2Ref}
                    >
                        <div className="image">

                            <LazyLoadedImage
                                className="product-image"
                                src="./images/about-me-page-2.png"
                                alt="Product"
                                loading="lazy"

                            />

                        </div>
                        <div className="text">
                            <h2>Creative Journey</h2>
                            <p className="profile-paragraph reused-paragraph">
                                Originally, I had aspirations of modifying clothing, but a
                                simple, personal accessory – my trusted fanny pack – sparked a
                                creative idea. Gathering all the necessary accessories and a
                                piece of fabric from around the house, I stood alongside my
                                mom, absorbing the step-by-step process until we reached the
                                final product. This marked the inception of my creative journey.
                            </p>
                        </div>
                    </div>

                    <div
                        className="profile-section"
                        id="profileSection3"
                        ref={profileSection3Ref}
                    >
                        <div className="text">
                            <h2>Meet Noora</h2>
                            <p className="profile-paragraph reused-paragraph">
                                Upon sharing my creation on social media, the positive feedback
                                from friends and fellow Instagram users fueled my determination
                                to explore further. The unwavering support from those around me,
                                the excitement of new collaborations, and the sheer joy of
                                witnessing the finished product continue to be my driving
                                forces.
                            </p>
                            <p className="profile-paragraph reused-paragraph">
                                By the way, the name Noora is a nod to my cat. Hihi, she's the
                                furry inspiration behind it all!
                            </p>
                        </div>
                        <div className="image">
                            <LazyLoadedImage
                                className="inspiration-image"
                                src="./images/about-me-page-3.png"
                                alt="Inspiration"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;
