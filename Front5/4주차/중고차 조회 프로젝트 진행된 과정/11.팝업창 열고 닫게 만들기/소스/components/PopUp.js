import React, { Component } from 'react';
import '../css/PopUp.css';

class PopUp extends Component {
  constructor(props) {
    console.log('PopUp constructor');
    super(props);

  }

  render() {

    return(
      <div id="popup">
        팝업창
      </div>
    );
  }
}

export default PopUp;