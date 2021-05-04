import React, { Component } from 'react';
import '../css/PopUp.css';

class PopUp extends Component {
  constructor(props) {
    console.log('PopUp constructor');
    super(props);

  }

  closePopUp=()=>{
    this.props.closePopUp();
  }

  render() {

    return(
      <div id="popup">
        팝업창
        <button onClick={this.closePopUp}>닫기</button>
      </div>
    );
  }
}

export default PopUp;