import React, { Component } from "react";

import { Movies } from "../../listmovies";
import { Preloader } from '../../preloader';
import { Search } from '../../search';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=5074fe77&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  handleSearch = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=5074fe77&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="content container">
        <Search handleSearch={this.handleSearch}/>
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <Preloader/>
        )}
      </div>
    );
  }
}

export { Main };
