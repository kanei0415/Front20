
import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            posts:this.props.posts,
        }
    }

    render(){
    
    const {loading,posts}=this.props;

        return (
    <div className="Posts">

  { loading &&
    <div> loading... </div>
  }
  <div>
    { 
    posts.map(post=>(
      <div key={post.id} className="movie_posts">
      <img src={post.medium_cover_image}/>
        <h3 className="movie_title">{post.title}</h3>
        <h5 className="movie_year">{post.year}</h5>
        <p class="movie_summary">{post.summary}</p>
      </div>
        )
    )
    }
  </div>


    </div>
  );
    }

}

export default Posts;
