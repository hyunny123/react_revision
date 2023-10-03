import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import AboutDetail from "./pages/AboutDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/:aboutId", element: <AboutDetail /> },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
