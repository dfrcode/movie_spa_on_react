import React, { Component } from "react";

import styles from "./Header.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="blue lighten-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Movie
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export { Header };
