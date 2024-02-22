import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function RecycledCollectionPage() {

    const beaProductImages = [
        './images/recycled-image-1.jpeg',
        './images/recycled-image-2.jpeg',
        './images/recycled-image-33.jpeg',
        './images/recycled-image-44.jpeg',
        './images/recycled-image-55.jpeg',
        './images/recycled-image-66.jpeg',
        './images/recycled-image-77.jpeg',
    ];

    // Define the desired order of images
    const customImageOrder = [3, 6, 5, 0, 2, 1, 4];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Recycled Material"
                productImages={beaProductImages}
                heading="Recycled Material Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default RecycledCollectionPage;