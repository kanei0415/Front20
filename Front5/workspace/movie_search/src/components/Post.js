import React , {Component} from "react";
import Item from "./Item";

class Post extends Component {
  render() {
    const {postedDatas} = this.props;
    return<div className="Post">
      {
        postedDatas.map((data,id) => {
          return (data!==undefined) && <Item key={id} data={data}/>
        })
      }
    </div>
  }
}

export default Post;