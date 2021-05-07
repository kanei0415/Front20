import React, { Component } from 'react';

class Movie extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id="movie">
                {this.props.title}
            </div>
        );
    }

}

export default Movie;