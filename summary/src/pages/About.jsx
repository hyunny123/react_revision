import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [text, setText] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/about/${text}`);
  };
  return (
    <div>
      About
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="About ID : "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
