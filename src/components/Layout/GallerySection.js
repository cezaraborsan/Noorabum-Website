import React from "react";
import IntersectionObserver from "../IntersectionObserver";
import LazyLoadedImage from "../LazyLoadedImage";
import { Link } from 'react-router-dom';

function GallerySection() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <section class="products-section" ref={targetRef}>
      <div class="gallery-overview">
        <div class="gallery-wrapper">
          <div class="gallery-block">
            <h3 class="gallery-heading">Our Products</h3>
            <p class="gallery-paragraph">Explore our collection of environmentally conscious waist bags
              meticulously crafted from upcycled materials, showcasing a commitment to sustainability.
              Elevate
              your style with our unique waist bags adorned with water-resistant watercolor designs, each
              infused with distinctive personalities. </p>

            <div class="main-button">
              <div class="button-wrapper">
                <Link to="/order" className="button-primary" >Order Yours</Link>
              </div>
            </div>
          </div>

          <div class="gallery-grid">
            {/* <img class="gallery-image shadow-two" alt="fanny bag" src="images/g5.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc5fb719893c141ba71_250206001_410441604015985_5352432410131370254_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc5fb719893c141ba71_250206001_410441604015985_5352432410131370254_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc5fb719893c141ba71_250206001_410441604015985_5352432410131370254_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc5fb719893c141ba71_250206001_410441604015985_5352432410131370254_n.jpg 1440w" /><img /> */}
            <LazyLoadedImage
              src="images/g5.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g6.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g7.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g8.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            {/* <img class="gallery-image shadow-two" alt="fanny bag" src="images/g6.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc86645b4f1bd140cc_189884830_310482557345224_1880649211609199108_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc86645b4f1bd140cc_189884830_310482557345224_1880649211609199108_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc86645b4f1bd140cc_189884830_310482557345224_1880649211609199108_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc86645b4f1bd140cc_189884830_310482557345224_1880649211609199108_n-p-1600.jpg 1600w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc86645b4f1bd140cc_189884830_310482557345224_1880649211609199108_n.jpg 1800w" /><img />

            <img class="gallery-image shadow-two" width="652.5" alt="fanny bag" src="images/g7.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca405dc69722a0a1042db1_170555320_279570860436394_392679225806803451_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca405dc69722a0a1042db1_170555320_279570860436394_392679225806803451_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca405dc69722a0a1042db1_170555320_279570860436394_392679225806803451_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca405dc69722a0a1042db1_170555320_279570860436394_392679225806803451_n.jpg 1440w" /><img />

            <img class="gallery-image shadow-two" alt="fanny bag" src="images/g8.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca407ad1677bacee9c5d0d_370933468_814859823976904_4293723984325508756_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca407ad1677bacee9c5d0d_370933468_814859823976904_4293723984325508756_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca407ad1677bacee9c5d0d_370933468_814859823976904_4293723984325508756_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca407ad1677bacee9c5d0d_370933468_814859823976904_4293723984325508756_n.jpg 1440w" />
           */}
          </div>

          <div class="gallery-grid">
            {/* <img class="gallery-image shadow-two" alt="fanny bag" src="images/g1.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc53b63e8308f8b35bc_241548468_386018679791611_8534853942566093585_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc53b63e8308f8b35bc_241548468_386018679791611_8534853942566093585_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc53b63e8308f8b35bc_241548468_386018679791611_8534853942566093585_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fc53b63e8308f8b35bc_241548468_386018679791611_8534853942566093585_n.jpg 1440w" /><img />
            <img class="gallery-image shadow-two" alt="fanny bag" src="images/g2.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc54161f1a7cf8bbf5_251155284_415460190180793_5872177726060028094_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc54161f1a7cf8bbf5_251155284_415460190180793_5872177726060028094_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc54161f1a7cf8bbf5_251155284_415460190180793_5872177726060028094_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fcc54161f1a7cf8bbf5_251155284_415460190180793_5872177726060028094_n.jpg 1440w" /><img />
            <img class="gallery-image shadow-two" alt="fanny bag" src="images/g3.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fccd8be4fcce037c190_192534556_310496544010492_8176854554022478151_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fccd8be4fcce037c190_192534556_310496544010492_8176854554022478151_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fccd8be4fcce037c190_192534556_310496544010492_8176854554022478151_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3fccd8be4fcce037c190_192534556_310496544010492_8176854554022478151_n.jpg 1440w" /><img />
            <img class="gallery-image shadow-two" alt="fanny bag" src="images/g4.jpg"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 380px"
              srcset="https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3bfce424ab0bd097433d_285814061_549825453410932_32807666698832433_n-p-500.jpg 500w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3bfce424ab0bd097433d_285814061_549825453410932_32807666698832433_n-p-800.jpg 800w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3bfce424ab0bd097433d_285814061_549825453410932_32807666698832433_n-p-1080.jpg 1080w, https://assets-global.website-files.com/65ca2d6db2eed79dd11bc551/65ca3bfce424ab0bd097433d_285814061_549825453410932_32807666698832433_n.jpg 1440w" />
             */}
            <LazyLoadedImage
              src="images/g1.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g2.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g3.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

            <LazyLoadedImage
              src="images/g4.jpg"
              alt="fanny bag"
              className="gallery-image shadow-two"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
