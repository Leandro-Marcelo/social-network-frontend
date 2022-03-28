import React from "react";
import "./Loader.css";

/* Esos divs que estan vacios estan hecho a proposito, es para que el loader funcione junto al css */
const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
