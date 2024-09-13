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
import ContactClassBased from "./Contact-ClassBased";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const AppLayout = () => {
  // addEventListener("scroll", (event) => {
  //   console.log(event);
  // });

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
        element: <ContactClassBased />,
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
