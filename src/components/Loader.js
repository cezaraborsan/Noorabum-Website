// import React, { useState, useEffect } from "react";

// function Loader() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//     const loaderTimeout = setTimeout(() => {
//       const loader = document.getElementById("loader");

//       loader.style.transform = "translateY(-100vh)";
//       setTimeout(() => {
//         loader.style.display = "none";

//         document.body.style.overflow = "visible";
//       }, 1000);
//     }, 4000);

//     return () => clearTimeout(loaderTimeout);
//   }, []);

//   document.body.style.overflow = "hidden";

//   return (
//     <div id="loader" className="loader">
//       <div className={`loader-text ${loaded ? "loaded" : ""}`}></div>
//     </div>
//   );
// }

// export default Loader;
