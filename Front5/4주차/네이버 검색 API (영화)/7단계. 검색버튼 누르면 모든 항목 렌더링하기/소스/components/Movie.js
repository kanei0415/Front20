import React, { Component } from 'react';

class Movie extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id="movie">
                <div>{this.props.actor}</div>
                <div>{this.props.director}</div>
                <div>{this.props.image}</div>
                <div>{this.props.link}</div>
                <div>{this.props.pubDate}</div>
                <div>{this.props.subtitle}</div>
                <div>{this.props.title}</div>
                <div>{this.props.userRating}</div>
                <hr></hr>
            </div>
        );
    }
}

export default Movie;