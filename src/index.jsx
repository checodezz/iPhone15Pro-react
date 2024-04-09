import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Features from "./pages/Features";
import Specifications from "./pages/Specifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features",
    element: <Features />,
  },{
    path: "/specifications",
    element: <Specifications/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
