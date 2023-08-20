import React from "react";
import "../../src/App.css";

export default function Profile() {
  return (
    <div className="profile">
      <img
        className="photo"
        src="https://images.unsplash.com/photo-1544985361-b420d7a77043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHwlRUIlOEYlOTklRUIlQUMlQkN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt="avatar"
      />
      <h1>hyunny Lee</h1>
      <p>프론트엔드 개발자</p>
    </div>
  );
}
