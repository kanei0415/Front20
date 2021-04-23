import React from "react";
import "../App.css";

import sport1 from "../images/sport1.png";
import sport2 from "../images/sport2.png";
import sport3 from "../images/sport3.png";

const Sports = () => {
  return<div className="Sports">
    <div className="content">
      <img src={sport1}/>
      <h1>Sports Post1</h1>
    </div>
    <div className="content">
      <img src={sport2}/>
      <h1>Sports Post2</h1>
    </div>
    <div className="content">
    <img src={sport3}/>
      <h1>Sports Post3</h1>
    </div>
  </div>
}

export default Sports;