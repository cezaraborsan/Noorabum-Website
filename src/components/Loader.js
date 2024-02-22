// Loader.js
import React, { useState, useEffect } from "react";
import "../loader.css";

function Loader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const loaderTimeout = setTimeout(() => {
            const loader = document.getElementById("loader");

            loader.style.transform = "translateY(-100vh)";
            setTimeout(() => {
                loader.style.display = "none";
                document.body.style.overflow = "visible";
            }, 1000);
        }, 4000);

        return () => clearTimeout(loaderTimeout);
    }, []);

    return (
        <div id="loader" className={`loader ${loaded ? "loaded" : ""}`}>
            <div class="marquee">
                <ul class="marquee__content scroll">
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                </ul>

                <ul class="marquee__content scroll" aria-hidden="true">
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                </ul>
            </div>
        </div>
    );
}

export default Loader;
