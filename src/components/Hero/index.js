import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Hero;
