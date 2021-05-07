import React, {Component} from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieName : "",
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleOnClick = e => {
    this.props.getMovieData(this.state.movieName);
  }

  render(){
    return<div className="SearchForm">
      <hr />
      <input type="text" name="movieName" onChange={this.handleOnChange}/>
      <button onClick={this.handleOnClick}>Search</button>
      <hr />
    </div>
  }
}

export default SearchForm;