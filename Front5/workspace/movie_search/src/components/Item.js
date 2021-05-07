import React, {Component} from 'react';

class Item extends Component {
  render(){
    const {data} = this.props;
    return<div className="Item">
      <hr />
      actor : {data.actor} <br />
      director : {data.director} <br />
      image : {data.image} <br />
      link : {data.link} <br />
      pubDate : {data.pubDate} <br />
      subtitle : {data.subtitle} <br />
      title : {data.title} <br />
      userRating : {data.userRating} <br />
      <hr />
    </div>
  }
}

export default Item;