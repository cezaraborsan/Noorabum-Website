import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function HarceapaceaCollectionPage() {

    const harceapaceaProductImages = [
        './images/harceapacea-image-1.jpg',
        './images/harceapacea-image-2.jpg',
        './images/harceapacea-image-3.jpg',
        './images/harceapacea-image-4.jpg',
        './images/harceapacea-image-5.jpg',
        './images/harceapacea-image-6.jpg',
        './images/harceapacea-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [6, 5, 3, 1, 0, 2, 4];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Harceapacea"
                productImages={harceapaceaProductImages}
                heading="Harceapacea Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus urna, ut convallis elit lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu ligula rhoncus, commodo magna ut, aliquam purus. Maecenas."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default HarceapaceaCollectionPage;