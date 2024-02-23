import React, { useState } from 'react';
import Navbar from "../Layout/Navbar.js";
import Footer from "../Layout/Footer.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useIntersectionObserver from "../IntersectionObserver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import "../../orderPage.css";

const OrderPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [emailError, setEmailError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleIntersection = (target) => {
        const sectionId = target.id;

        if (sectionId === 'messageForm') {
            target.classList.add("visible-message-form");
        } else if (sectionId === 'contactInfo') {
            target.classList.add("visible-contact-info");
        } else if (sectionId === 'imageSlider') {
            target.classList.add("visible-image-slider");
        } else if (sectionId === 'orderPageWrapper') {
            target.classList.add("visible-order-page-wrapper");
        }
    }
    const orderPageWrapperRef = useIntersectionObserver(handleIntersection, {
        threshold: 0.2,
    });

    const contactInfoRef = useIntersectionObserver(handleIntersection, {
        threshold: 0.2,
    });

    const messageFormRef = useIntersectionObserver(handleIntersection, {
        threshold: 0.2,
    });

    const imageSliderRef = useIntersectionObserver(handleIntersection, {
        threshold: 0.2,
    });


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const images = ['./images/clients-1.png', './images/clients-2.png', './images/clients-6.png', './images/clients-8.png', './images/clients-10.png', './images/clients-3.jpeg', './images/clients-11.png', './images/clients-9.png', './images/clients-12.png', './images/clients-4.jpeg',];

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }

        setEmailError('');
        return true;
    };

    const submitForm = async () => {
        if (!validateEmail()) {
            // Email validation failed, don't submit the form
            return;
        }

        const form = document.getElementById("contactForm");
        const formDataObject = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formDataObject,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();
            console.log(data);

            // Reset form data and show thank-you message
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setFormSubmitted(true);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <Navbar />
            <div className='order-page-wrapper' id='orderPageWrapper' ref={orderPageWrapperRef} >
                <div className="order-page">
                    <h2>Order Our Waist Bags</h2>
                    <p className='order-page-paragraph reused-paragraph'>
                        To order our waist bags, feel free to reach out to us via direct message on our Instagram page, and we'll respond promptly. This applies to any other inquiries or collaborations as well. Additionally, we've attached a form below, so for any information, you can contact us on Instagram, via email, Facebook, or by using the form.
                    </p>

                    <div className="contact-info" id="contactInfo" ref={contactInfoRef}>
                        <h2>Social Media</h2>
                        <p className='order-page-paragraph reused-paragraph'>For additional product photos and customer testimonials, explore our presence on various social media platforms. Engage with our content, discover the latest updates, and witness firsthand the positive experiences shared by our valued customers. Follow us on social media to stay connected and informed about our latest offerings and community interactions.</p>
                        <div className="footer-social-block contact-social-block">
                            <a href="https://www.instagram.com/noorabum/?hl=en" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/people/Noorabum/100063586802344/" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faFacebookF} /> </a>
                            <a href="https://www.tiktok.com/@silvialucutar" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTiktok} /></a>
                        </div>
                    </div>

                    <div className="message-form" id="messageForm" ref={messageFormRef}>
                        <h2>Contact Us</h2>
                        <p className='order-page-paragraph reused-paragraph'>
                            Have a question or just want to say hello? Use the form below to send us a message, and we'll get back to you as soon as possible.
                        </p>

                        <form id="contactForm" action="https://formspree.io/f/mrgnqvew" method="POST">
                            <div className='form-input'>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='form-input'>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <p className="error-message">{emailError}</p>
                            </div>
                            <div className='form-input'>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className='submit-message-button'>
                                <button type="button" onClick={submitForm} className='button-primary'>Send Message</button>

                                {formSubmitted && (
                                    <div className="thank-you-message">
                                        <p>Thank you for your message!</p>
                                    </div>
                                )}
                            </div>
                        </form>


                    </div>

                    <div className="image-slider-container" id="imageSlider" ref={imageSliderRef}>
                        <h2>Community Showcase</h2>
                        <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                                <div key={index} className="slider-image-container">
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );
};

export default OrderPage;
