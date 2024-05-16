import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";

const Body = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Body;
