import React, { Component } from 'react';
import './Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Movie extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const genre_rend=
        <div id="movie_genre">
            genre:
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
                    <div className="movie_title">{this.props.title}</div>
                    <div className="movie_year">{this.props.year}</div>
                    {genre_rend}
                    <div className="movie_time">{this.props.runtime}min</div>
                    <div className="movie_rating"><img src="./images/logo-imdb.svg"/>{this.props.rating}</div>
                    <div class="movie_summary">{this.props.summary}</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Movie;