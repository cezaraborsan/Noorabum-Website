// ProductPage.js
// import React, { useState, useEffect } from 'react';
import '../../collections.css';
import LazyLoadedImage from "../LazyLoadedImage";


const ProductPage = ({ collectionName, productImages, heading, paragraph, imageOrder }) => {

    const orderedProductImages = imageOrder ? imageOrder.map(index => productImages[index]) : productImages;

    return (
        <div className="product-page">
            <div className="product-page-wrapper">
                <div className="product-page-container">
                    <div className="product-page-section">
                        <div className="product-page-gallery">
                            <div className="product-page-info">
                                <h2 className="product-page-heading">{collectionName} Collection</h2>
                                {/* <p className="product-page-paragraph reused-paragraph">{paragraph}</p> */}
                            </div>
                            <div className="product-page-grid">
                                {orderedProductImages.map((image, index) => (
                                    <div className="product-page-image-container" key={index}>
                                        <LazyLoadedImage
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="product-page-image"
                                            loading="eager"
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
