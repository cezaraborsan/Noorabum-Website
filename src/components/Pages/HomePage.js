import React from "react";
import Hero from "../Layout/Hero.js";
import Footer from "../Layout/Footer";
import GallerySection from "../Layout/GallerySection.js";
import Navbar from "../Layout/Navbar";
import CollectionSection from "../Layout/CollectionSection.js"
import ContactSection from "../Layout/ContactSection.js"
import BestsellerSection from "../Layout/BestsellerSection.js"
import CopyRights from "../Layout/CopyRights.js"
import AboutSection from "../Layout/AboutSection.js"
import FlowerSection from "../Layout/FlowerSection.js";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <GallerySection />
      <CollectionSection />
      <BestsellerSection />
      <FlowerSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyRights />
    </>
  );
}

export default HomePage;
