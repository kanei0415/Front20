import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const genre_rend=
        <div id="movie_genre">
        {this.props.genres.map((genre)=>{return <span className="genre">{genre}</span>})}
        </div>

        return(
            <div key={this.props.id} id="movie_posts">
                <div id="movie_left">
                    <div id="left_comp">
                        <span className="cover_back">
                        <img src={this.props.medium_cover_image}/>
                        </span>
                    
                        <span className="down">Download</span>
                    </div>   
                </div>

                <div id="movie_right">
                    <div id="right_comp">
                    <h3 className="movie_title">{this.props.title}</h3>
                    <h5 className="movie_year">{this.props.year}</h5>
                    {genre_rend}
                    <h5 className="movie_time">{this.props.runtime}</h5>
                    <h5 className="movie_rating">{this.props.rating}</h5>
                    <p class="movie_summary">{this.props.summary}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Movie;