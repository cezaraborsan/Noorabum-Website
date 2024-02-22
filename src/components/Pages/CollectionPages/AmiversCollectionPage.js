import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function AmiversCollectionPage() {

    const amiversProductImages = [
        './images/amivers-image-1.jpg',
        './images/amivers-image-2.jpg',
        './images/amivers-image-3.jpg',
        './images/amivers-image-4.jpg',
        './images/amivers-image-5.jpg',
        './images/amivers-image-6.jpg',
        './images/amivers-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [2, 0, 6, 3, 5, 1, 4];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Amivers"
                productImages={amiversProductImages}
                heading="Amivers Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default AmiversCollectionPage;