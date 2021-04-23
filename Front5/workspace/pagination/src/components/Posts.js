import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading : this.props.loading,
      posts : this.props.posts,
    }
  }

  render() {
    const {loading, posts} = this.props;

    return<div className="Posts">
      {
        loading && <div>Loading...</div>
      }

      <ul>
        {
          posts.map(post => {
            return <li key={post.id}>
              {post.title}
            </li>
          })
        }
      </ul>
    </div>
  }
}

export default Posts