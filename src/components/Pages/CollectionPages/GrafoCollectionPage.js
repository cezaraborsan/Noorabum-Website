import React from "react";
import Navbar from "../../Layout/Navbar.js";
import Footer from "../../Layout/Footer.js";
import ProductPage from "../../Layout/ProductPageLayout.js";


function GrafoCollectionPage() {

    const grafoProductImages = [
        './images/grafo-image-1.jpg',
        './images/grafo-image-2.jpg',
        './images/grafo-image-3.jpg',
        './images/grafo-image-4.jpg',
        './images/grafo-image-5.jpg',
        './images/grafo-image-6.jpg',
        './images/grafo-image-7.jpg',
    ];

    // Define the desired order of images
    const customImageOrder = [3, 6, 4, 1, 0, 5, 2];

    return (
        <>
            <Navbar />
            <ProductPage
                collectionName="Grafo"
                productImages={grafoProductImages}
                heading="Grafo Collection"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit for Alcazalex Collection."
                imageOrder={customImageOrder}
            />
            <Footer />
        </>
    );
}

export default GrafoCollectionPage;