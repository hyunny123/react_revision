import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <span className="number">{total}</span>
      <button
        className="btn"
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Add+
      </button>
    </div>
  );
}
