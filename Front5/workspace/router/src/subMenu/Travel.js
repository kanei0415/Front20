import React from "react";
import "../App.css";

import travel1 from "../images/travel1.png";
import travel2 from "../images/travel2.png";
import travel3 from "../images/travel3.png";

const Travel = () => {
  return<div className="Travel">
    <div className="content">
      <img src={travel1}/>
      <h1>Travel Post1</h1>
    </div>
    <div className="content">
      <img src={travel2}/>
      <h1>Travel Post2</h1>
    </div>
    <div className="content">
    <img src={travel3}/>
      <h1>Travel Post3</h1>
    </div>
  </div>
}

export default Travel;