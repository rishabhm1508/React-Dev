import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";

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
