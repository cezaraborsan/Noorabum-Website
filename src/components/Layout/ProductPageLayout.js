// ProductPage.js
import React, { useState, useEffect } from 'react';
import '../../collections.css';

const ProductPage = ({ collectionName, productImages, heading, paragraph, imageOrder }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const resolutions = [1, 2, 3];

    const orderedProductImages = imageOrder
        ? imageOrder.map(index => resolutions.map(res => `${productImages[index]}?w=${res * 100}`))
        : resolutions.map(res => productImages.map(image => `${image}?w=${res * 100}`));

    useEffect(() => {
        // Set imageLoaded to true once all images are loaded
        const imagesToLoad = orderedProductImages.flat().length;
        let loadedImages = 0;

        const handleImageLoad = () => {
            loadedImages++;
            if (loadedImages === imagesToLoad) {
                setImageLoaded(true);
            }
        };

        orderedProductImages.flat().forEach((image) => {
            const img = new Image();
            img.onload = handleImageLoad;
            img.src = image;
        });
    }, [orderedProductImages]);

    return (
        <div className={`product-page ${imageLoaded ? 'fade-in' : ''}`}>
            <div className="product-page-wrapper">
                <div className="product-page-container">
                    <div className="product-page-section">
                        <div className="product-page-gallery">
                            <div className="product-page-info">
                                <h2 className="product-page-heading">{collectionName} Collection</h2>
                                <p className="product-page-paragraph reused-paragraph">{paragraph}</p>
                            </div>
                            <div className="product-page-grid">
                                {orderedProductImages.map((resolutions, index) => (
                                    <div key={index} className="product-page-image-container">
                                        <img
                                            srcSet={resolutions.join(', ')}
                                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33.3vw"
                                            alt={`Product ${index + 1}`}
                                            className={`product-page-image ${imageLoaded ? 'fade-in' : ''}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
