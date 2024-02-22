import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function RoqicCollectionPage() {

    const roqicProductImages = [
        './images/roqic-image-1.jpg',
        './images/roqic-image-2.jpg',
        './images/roqic-image-3.jpg',
        './images/roqic-image-4.jpg',
        './images/roqic-image-5.jpg',
        './images/roqic-image-6.jpg',
        './images/roqic-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [2, 1, 5, 6, 4, 0, 3];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Roqic"
                productImages={roqicProductImages}
                heading="Roqic Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default RoqicCollectionPage;