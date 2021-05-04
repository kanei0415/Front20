import React, { Component } from 'react';
import axios from 'axios';
import Car from './components/Car.js';

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      carList:[

      ]
    }
  }

  _getCarInfo = async() => {
    const res = await axios.get('/api/getCarInfo');
    console.log(res);

    const car_data=res.data.car_res;
    console.log("car데이터 길이",car_data.length);

    let carObj = null;

    for(var i=0; i<car_data.length; i++)
    {
      carObj = new Object();
      carObj.id=car_data[i].id;
      carObj.car_name=car_data[i].car_name;
      carObj.provider=car_data[i].provider;
      carObj.color=car_data[i].color;
      carObj.produce_date=car_data[i].produce_date;
      carObj.receiving_date=car_data[i].receiving_date;
      carObj.price=car_data[i].price;
      carObj.accident=car_data[i].accident;
      carObj.displacement=car_data[i].displacement;
      carObj.distance_driven=car_data[i].distance_driven;
      carObj.fuel=car_data[i].fuel;
      carObj.transmission=car_data[i].transmission;
      this.setState({carList:this.state.carList.concat(carObj)});
      carObj = null;
    }

  }

  componentDidMount() {
    this._getCarInfo();
  }

  render() {
    const {carList} = this.state;

    const carRender = carList.map( (data, i) => 
    <Car key={data.id} id={data.id} car_name={data.car_name}
    provider={data.provider}  color={data.color} produce_date={data.produce_date}
    receiving_date={data.receiving_date} price={data.price} accident={data.accident} 
    displacement={data.displacement} distance_driven={data.distance_driven} fuel={data.fuel} 
    transmission={data.transmission} 
    ></Car> )

    return(
      <div>
        {carRender}
      </div>
    );

  }
}

export default App;