import React, { Component } from "react";

import { Movies } from "../../listmovies/Movies";

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

  render() {
    const { movies } = this.state;

    return (
      <div className="content container">
        {movies.length ? <Movies movies={movies} /> : <h3>Not results...</h3>}
      </div>
    );
  }
}

export { Main };
