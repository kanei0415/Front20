import React, { Component } from 'react';
import "../css/Car.css";

class Car extends Component {

    constructor(props) {
        super(props);

        this.state={
            toggle:false,
            name:this.props.name,
            price:this.props.price,
            year:this.props.year,
        }

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleDelete = (e) => {
        alert("Car의 삭제함수");
        var name = [e.target.name];
        this.props.handleDelete(name);
        //app의 handleDelete함수
    }

    handleUpdate=(e)=>{
        alert("Car의 수정함수");
        const {toggle,name,price,year}=this.state;
        
        if(toggle==true)
        {//수정버튼을 눌렀는데 수정가능모드다?
            this.props.handleUpdate(name,price,year);
            //수정요청 보냄
        }
        else if(toggle==false)
        {//수정버튼을 눌렀는데 수정 불가능모드다?

        }

        this.setState({
            toggle:!toggle
        })
    }

    render() {
        const {toggle}=this.state;
        if(toggle==true)//수정가능 모드
        {
            return (
                <div id="carWrap">
    
                    <div id="carLogo">
                        <img src={this.props.car_img}/>
                    </div>
    
                    <div id="rightSide">
                        <div>차종:{this.props.name}</div>
                        <div>가격:<input defaultValue={this.props.price} onChange={this.handleChange} name="price"/></div>
                        <div>년식:<input defaultValue={this.props.year} onChange={this.handleChange} name="year"/></div>
                        <div>
                            <button onClick={this.handleDelete} name={this.props.name}>삭제</button>
                            <button onClick={this.handleUpdate} name={this.props.name}>수정</button>
                        </div>
                    </div>
                </div>
            );
        }
        else if(toggle==false)//수정불가능 모드
        {
            return (
                <div id="carWrap">
    
                    <div id="carLogo">
                        <img src={this.props.car_img}/>
                    </div>
    
                    <div id="rightSide">
                        <div>차종:{this.props.name}</div>
                        <div>가격:{this.props.price}</div>
                        <div>년식:{this.props.year}</div>
                        <div>
                            <button onClick={this.handleDelete} name={this.props.name}>삭제</button>
                            <button onClick={this.handleUpdate} name={this.props.name}>수정</button>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default Car;

