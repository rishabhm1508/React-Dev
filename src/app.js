import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";

/**
 * Food Order Application
 *
 * Header Component
 *  - Logo Component
 *  - Navbar Component
 *
 * Body Component
 *  - Search Component
 *  - Cards Container Component
 *    - Cards Component
 *
 * Footer
 *  - License
 *  - Copyright
 *  - Contact
 *  - Address
 */

const AppLayout = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const renderer = ReactDOM.createRoot(document.getElementById("root"));
renderer.render(<AppLayout />);
