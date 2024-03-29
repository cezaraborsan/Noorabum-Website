import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function CustomizedCollectionPage() {

    const customizedProductImages = [
        './images/customized-image-1.jpg',
        './images/customized-image-2.jpg',
        './images/customized-image-3.jpg',
        './images/customized-image-4.1.jpg',
        './images/customized-image-5.1.jpg',
        './images/customized-image-6.jpg',
        './images/customized-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [3, 6, 1, 2, 0, 5, 4];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Customized"
                productImages={customizedProductImages}
                heading="Customized Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default CustomizedCollectionPage;