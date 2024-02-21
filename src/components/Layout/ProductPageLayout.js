// ProductPage.js
import React, { useState, useEffect } from 'react';
import '../../collections.css';


const ProductPage = ({ collectionName, productImages, heading, paragraph, imageOrder }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const orderedProductImages = imageOrder ? imageOrder.map(index => productImages[index]) : productImages;

    useEffect(() => {
        // Set imageLoaded to true once all images are loaded
        const imagesToLoad = orderedProductImages.length;
        let loadedImages = 0;

        const handleImageLoad = () => {
            loadedImages++;
            if (loadedImages === imagesToLoad) {
                setImageLoaded(true);
            }
        };

        orderedProductImages.forEach((image) => {
            const img = new Image();
            img.onload = handleImageLoad;
            img.src = image;
        });
    }, [orderedProductImages]);


    return (
        <section className={`product-page ${imageLoaded ? 'fade-in' : ''}`} >
            <div className="product-page-wrapper">
                <div className="product-page-container">
                    <div className="product-page-section">
                        <div className="product-page-gallery">
                            <div className="product-page-info">
                                <h2 className="product-page-heading">{collectionName} Collection</h2>
                                <div className="product-page-small-spacing"></div>
                                <p className="product-page-paragraph reused-paragraph">{paragraph}</p>
                            </div>
                            <div className="product-page-large-spacing"></div>
                            <div className="product-page-grid">
                                {orderedProductImages.map((image, index) => (
                                    <a key={index} href="#" className="product-page-image-container">
                                        <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className={`product-page-image ${imageLoaded ? 'fade-in' : ''}`}
                                            loading="lazy"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
