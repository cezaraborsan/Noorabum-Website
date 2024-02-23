import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoadedImage from "../LazyLoadedImage";

function useRowIntersectionObserver(handleIntersection, threshold, targetRef) {
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
        });

        const currentTargetRef = targetRef.current;

        if (currentTargetRef) {
            observer.observe(currentTargetRef);

            return () => {
                observer.unobserve(currentTargetRef);
            };
        }
    }, [handleIntersection, threshold, targetRef]);
}

function CollectionGallerySection() {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const row3Ref = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("collection-gallery-row-visible");
            }
        });
    };

    useRowIntersectionObserver(handleIntersection, 0.5, row1Ref);
    useRowIntersectionObserver(handleIntersection, 0.4, row2Ref);
    useRowIntersectionObserver(handleIntersection, 0.4, row3Ref);

    return (
        <div className="collection-page-gallery">
            <div className="collection-gallery-wrapper">
                <div className="collection-gallery-container">
                    <div className="collection-gallery-section">
                        <div className="collection-gallery-content">
                            <div className="collection-gallery-info">
                                <h2 className="collection-gallery-heading">Collections</h2>
                                <div className="collection-gallery-small-spacing"></div>
                                <p className="collection-gallery-paragraph reused-paragraph">
                                    I've released several collections since starting Noorabum.
                                    They include items made from recyclable materials,
                                    customized fanny packs tailored to each customer's preference,
                                    and the latest collections collaborated with local artists,
                                    which have been a joy to create.
                                </p>
                            </div>

                            <div className="collection-gallery-row" ref={row1Ref} id="row1">

                                <Link to="/borisanki" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/borisanki-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Borisanki Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/amivers" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/amivers-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Amivers Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/beahopes" className="collection-gallery-image ">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/beahopes-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Beahopes Collection</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="collection-gallery-row" ref={row2Ref} id="row2">
                                <Link to="/customized" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/painted-collection-thumbnail.jpg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Customized Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/recycled" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/recycled-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Recycled Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/roqic" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/roqic-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Roqic Collection</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="collection-gallery-row" ref={row3Ref} id="row3">
                                <Link to="/grafo" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/grafo-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Grafo Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/alcazalex" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/alcazalex-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Alcazalex Collection</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/harceapacea" className="collection-gallery-image">
                                    <div class="content">
                                        <div class="content-overlay"></div>
                                        <LazyLoadedImage
                                            src="./images/harceapacea-collection-thumbnail.jpeg"
                                            alt="fanny bag"
                                            className="collection-thumbnail content-image"
                                            loading="lazy"
                                        />
                                        <div class="content-details fadeIn-top">
                                            <h5>Harceapacea Collection</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionGallerySection;
