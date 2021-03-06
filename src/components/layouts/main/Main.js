import React, { Component } from "react";

import { Movies } from '../../listmovies/Movies';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }
  
  render() {

    const { movies } = this.state;

    return (
      <div className="content container">

        { movies.length ? <Movies movies={movies}/> : <h3>Not results...</h3> }
        
      </div>
    );
  }
};

export { Main };
