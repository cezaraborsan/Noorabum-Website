import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function BeaCollectionPage() {

    const beaProductImages = [
        './images/bea-image11.jpg',
        './images/bea-image22.jpg',
        './images/bea-image33.jpg',
        './images/bea-image44.jpg',
        './images/bea-image55.jpg',
        './images/bea-image66.jpg',
        './images/bea-image77.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [3, 6, 5, 2, 0, 1, 4];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Beahopes"
                productImages={beaProductImages}
                heading="Beahopes Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit for Beahopes Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Beahopes Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Beahopes Collection."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default BeaCollectionPage;