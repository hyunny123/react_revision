import "./App.css";
import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProduct() {
  const [showProduct, setShowProduct] = useState(true);
  return (
    <div>
      {showProduct && <Products />}
      <button onClick={() => setShowProduct((show) => !show)}>Toggle</button>
    </div>
  );
}
