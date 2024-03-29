import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function BorisankiCollectionPage() {

    const borisankiProductImages = [
        './images/borisanki-image1.jpg',
        './images/borisanki-image2.jpg',
        './images/borisanki-image3.jpg',
        './images/borisanki-image4.jpg',
        './images/borisanki-image5.jpg',
        './images/borisanki-image6.jpg',
        './images/borisanki-image7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [0, 6, 4, 2, 3, 1, 5];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Borisanki"
                productImages={borisankiProductImages}
                heading="Borisanki Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default BorisankiCollectionPage;