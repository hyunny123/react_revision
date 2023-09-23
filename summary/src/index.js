import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import AppXY from "./AppXY";
import AppMentor from "./AppMentor";
import AppMentors from "./AppMentors";
import AppMentorsImmer from "./AppMentorsimmer";
import AppForm from "./AppForm";
import AppWrap from "./components/AppWrap";
import AppCard from "./components/AppCard";
import AppTheme from "./AppTheme";
import AppMentorsButton from "./AppMontorsButton";
import AppProducts from "./AppProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
