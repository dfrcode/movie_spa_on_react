import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
        this.props.handleSearch(this.state.search);
    }
  }

  render() {
    const { search } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12">
            <div className="input-field ">
              <input
                type="search"
                className="validate"
                placeholder="search"
                value={search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
              />
              <button className="btn blue lighten-1 search-btn" onClick={() => this.props.handleSearch(this.state.search)}>Search</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Search };
