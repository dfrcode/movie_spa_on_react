import React, { Component } from "react";

import styles from "./Main.module.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content container">
        <p>This is main!</p>
      </div>
    );
  }
}

export { Main };
