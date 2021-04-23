import React from "react";
import "../App.css";

import it1 from "../images/it1.png";
import it2 from "../images/it2.png";
import it3 from "../images/it3.png";

const IT = () => {
  return<div className="IT">
    <div className="content">
      <img src={it1}/>
      <h1>IT Post1</h1>
    </div>
    <div className="content">
      <img src={it2}/>
      <h1>IT Post2</h1>
    </div>
    <div className="content">
    <img src={it3}/>
      <h1>IT Post3</h1>
    </div>
  </div>
}

export default IT;