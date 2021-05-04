import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    console.log('Car constructor');
    super(props);
    this.state = {
      id:this.props.id,
      car_name:this.props.car_name,
      provider:this.props.provider,
      color:this.props.color,
      produce_date:this.props.produce_date,
      receiving_date:this.props.receiving_date,
      price:this.props.price,
      accident:this.props.accident,
      displacement:this.props.displacement,
      distance_driven:this.props.distance_driven,
      fuel:this.props.fuel,
      transmission:this.props.transmission,
    }
  }

  render() {
    const {id,car_name,provider,color,produce_date
    ,receiving_date,price,accident,displacement,distance_driven
    ,fuel,transmission}=this.state;
    return(
      <div>
        <div>{id}</div>
        <div>{car_name}</div>
        <div>{provider}</div>
        <div>{color}</div>
        <div>{produce_date}</div>
        <div>{receiving_date}</div>
        <div>{price}</div>
        <div>{accident}</div>
        <div>{displacement}</div>
        <div>{distance_driven}</div>
        <div>{fuel}</div>
        <div>{transmission}</div>
      </div>
    );
  }
}

export default Car;