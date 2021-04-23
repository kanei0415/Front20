import React from "react";
import "../App.css";

import life1 from "../images/life1.png";
import life2 from "../images/life2.png";
import life3 from "../images/life3.png";

const Life = () => {
  return<div className="Life">
    <div className="content">
      <img src={life1}/>
      <h1>Life Post1</h1>
    </div>
    <div className="content">
      <img src={life2}/>
      <h1>Life Post2</h1>
    </div>
    <div className="content">
    <img src={life3}/>
      <h1>Life Post3</h1>
    </div>
  </div>
}

export default Life;