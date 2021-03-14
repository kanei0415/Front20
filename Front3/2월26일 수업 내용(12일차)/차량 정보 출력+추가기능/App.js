import React, { Component } from 'react';
import Car from "./components/Car";
import InputForm from "./components/InputForm";

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state={
      carList:[
        {
          name:'소나타',
          price:2400,
          year:2018,
          car_img:"/images/sonata.png"
        },
        {
          name:'아반떼',
          price:2200,
          year:2016,
          car_img:"/images/avante.png"
        }
        ,
        {
          name:'벤츠',
          price:6500,
          year:2020,
          car_img:"/images/benz.png"
        }
      ],
      carName:[
        {korName:'소나타',engName:'sonata'},
        {korName:'아반떼',engName:'avante'},
        {korName:'벤츠',engName:'benz'},
        {korName:'렉서스',engName:'lexus'},
      ]
    }
  }

  handleCreate=(name,price,year)=>{
    alert("App의 create");
    
    var car_img='';
    const {carName}=this.state;
    for(var i=0; i<carName.length; i++)
    {
      if(carName[i].korName==name)
      {
        car_img = "/images/"+carName[i].engName+".png"
      }
    }

    const data={name:name,price:price,year:year,car_img:car_img}
    const {carList} = this.state;
    this.setState({
      carList:carList.concat(data)
    })
  }

  render() {
    const {carList}=this.state;
    var result = carList.map( 
      (obj,index)=>(<Car key={index} name={obj.name} price={obj.price} 
        year={obj.year} car_img={obj.car_img}></Car>));
    return (
      <div>
        
        <InputForm handleCreate={this.handleCreate}></InputForm>
        {result}
      </div>
    );
  }
}

export default App;