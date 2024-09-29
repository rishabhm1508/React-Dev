import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantDetailsCard from "./RestaurantDetailsCard";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import CartComponent from "./Cart";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Provider store={appStore}>
        <HeaderComponent />
        <Outlet />
      </Provider>
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
      {
        path: "/cart",
        element: <CartComponent />,
      },
    ],
  },
]);

const renderer = ReactDOM.createRoot(document.getElementById("root"));
renderer.render(<RouterProvider router={routes} />);
