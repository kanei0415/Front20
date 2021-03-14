import React, { Component } from 'react';
import "../css/Car.css"
class Car extends Component {

  constructor(props)
  {
    super(props);

  }

  render() {

    return (
      <div id="carWrap">

        <div id="carLogo">
           <img src={this.props.car_img}></img>
        </div>
            
        <div id="right_side">
          <div id="carName">
          차종:{this.props.name}
          </div>
          
          <div id="carPrice">
          가격:{this.props.price}
          </div>

          <div id="carYear">
          년식:{this.props.year}
          </div>
        </div>          
      </div>
    );
  }
}

export default Car;