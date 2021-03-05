import React, { Component } from "react";

import styles from "./Footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        date: new Date().getFullYear()
    }
  }

  render() {
    return (
      <footer class="page-footer  blue lighten-1">
        <div class="footer-copyright  blue lighten-1">
          <div class="container">
            © {this.state.date} Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export { Footer };
