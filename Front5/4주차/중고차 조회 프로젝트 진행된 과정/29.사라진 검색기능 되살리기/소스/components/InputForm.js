import React, { Component } from 'react';
import '../css/InputForm.css';

class InputForm extends Component {
  constructor(props) {
    console.log('InputForm constructor');
    super(props);
    
  }

  render() {

    return(
      <div id="input-form">
          <input type="text" placeholder="차량명 입력"></input>
          <button>추가</button>
      </div>
    );
  }
}

export default InputForm;