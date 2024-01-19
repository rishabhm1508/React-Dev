import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantDetailsCard from "./RestaurantDetailsCard";

const AppLayout = () => {
  // addEventListener("scroll", (event) => {
  //   console.log(event);
  // });

  return (
    <div className="app-container">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:id",
        element: <RestaurantDetailsCard />,
      },
    ],
  },
]);

const renderer = ReactDOM.createRoot(document.getElementById("root"));
renderer.render(<RouterProvider router={routes} />);
