import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function AlcazalexCollectionPage() {

    const alcazalexProductImages = [
        './images/alcazalex-image-1.jpg',
        './images/alcazalex-image-2.jpg',
        './images/alcazalex-image-3.jpg',
        './images/alcazalex-image-4.jpg',
        './images/alcazalex-image-5.jpg',
        './images/alcazalex-image-6.jpg',
        './images/alcazalex-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [6, 1, 2, 4, 3, 0, 5];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Alcazalex"
                productImages={alcazalexProductImages}
                heading="Alcazalex Collection"
                imageOrder={customImageOrder}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
            />
            <Footer />
        </>
    );
}

export default AlcazalexCollectionPage;