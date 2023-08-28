import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {number}
        <span className="total">/{total}</span>
      </p>
      <button
        className="btn"
        onClick={() => {
          setNumber((prev) => prev + 1);
          onClick();
        }}
      >
        Add+
      </button>
    </div>
  );
}
