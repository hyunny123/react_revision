import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <p>notFound</p>,
  },
  {
    path: "/about",
    element: <p>About</p>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
