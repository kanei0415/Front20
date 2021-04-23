import React from "react";
import "../App.css";

import culture1 from "../images/culture1.png";
import culture2 from "../images/culture2.png";
import culture3 from "../images/culture3.png";

const Culture = () => {
  return<div className="Culture">
    <div className="content">
      <img src={culture1}/>
      <h1>Culture Post1</h1>
    </div>
    <div className="content">
      <img src={culture2}/>
      <h1>Culture Post2</h1>
    </div>
    <div className="content">
    <img src={culture3}/>
      <h1>Culture Post3</h1>
    </div>
  </div>
}

export default Culture;