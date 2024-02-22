// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import HomePage from "./components/Pages/HomePage.js";
import AboutPage from "./components/Pages/AboutPage.js";
import BorisankiCollectionPage from "./components/Pages/CollectionPages/BorisankiCollectionPage.js";
import BeaCollectionPage from "./components/Pages/CollectionPages/BeaCollectionPage.js";
import RecycledCollectionPage from "./components/Pages/CollectionPages/RecycledCollectionPage.js";
import AmiversCollectionPage from "./components/Pages/CollectionPages/AmiversCollectionPage.js";
import RoqicCollectionPage from "./components/Pages/CollectionPages/RoqicCollectionPage.js";
import CustomizedCollectionPage from "./components/Pages/CollectionPages/CustomizedCollectionPage.js";
import HarceapaceaCollectionPage from "./components/Pages/CollectionPages/HarceapaceaCollectionPage.js";
import GrafoCollectionPage from "./components/Pages/CollectionPages/GrafoCollectionPage.js";
import AlcazalexCollectionPage from "./components/Pages/CollectionPages/AlcazalexCollectionPage.js";
import OrderPage from "./components/Pages/OrderPage.js";
import AboutUsPage from "./components/Pages/AboutUsPage.js";

import Loader from './components/Loader.js';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Loader />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/borisanki" element={<BorisankiCollectionPage />} />
        <Route path="/beahopes" element={<BeaCollectionPage />} />
        <Route path="/recycled" element={<RecycledCollectionPage />} />
        <Route path="/amivers" element={<AmiversCollectionPage />} />
        <Route path="/roqic" element={<RoqicCollectionPage />} />
        <Route path="/customized" element={<CustomizedCollectionPage />} />
        <Route path="/harceapacea" element={<HarceapaceaCollectionPage />} />
        <Route path="/grafo" element={<GrafoCollectionPage />} />
        <Route path="/alcazalex" element={<AlcazalexCollectionPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />

      </Routes>

    </Router>
  );
}

export default App;
