import React, { Component } from 'react';
import "../css/Car.css";

class Car extends Component {

    constructor(props) {
        super(props);
    }

    handleDelete = (e) => {
        alert("Car의 삭제함수");
        var name = [e.target.name];
        this.props.handleDelete(name);
        //app의 handleDelete함수
    }

    render() {

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
                        <button>수정</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Car;

