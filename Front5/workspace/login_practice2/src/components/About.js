import React, {Component} from "react";

class About extends Component {
  render(){
    return<div className="About">
      About - {this.props.msg}
    </div>
  }
}

export default About;