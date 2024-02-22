// Loader.js
import React, { useState, useEffect } from "react";
import "../loader.css";

function Loader() {
    const [loaded] = useState(false);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            const loader = document.getElementById("loader");

            loader.style.transform = "translateY(-100vh)";
            setTimeout(() => {
                loader.style.display = "none";
                document.body.style.overflow = "visible"; // Restore scroll
            }, 1000);
        }, 4000);

        // Disable scroll when loader is visible
        document.body.style.overflow = "hidden";

        return () => {
            clearTimeout(loaderTimeout);
            document.body.style.overflow = "visible";
        };
    }, []);

    return (
        <div id="loader" className={`loader ${loaded ? "loaded" : ""}`}>
            <div className="marquee">
                <ul className="marquee__content scroll">
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                </ul>

                <ul className="marquee__content scroll" aria-hidden="true">
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                    <h2>Noorabum</h2>
                </ul>
            </div>
        </div>
    );
}

export default Loader;
