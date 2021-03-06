import React from "react";

const Footer = () => {
  
    return (
      <footer className="page-footer  blue lighten-1">
        <div className="footer-copyright  blue lighten-1">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  
}

export { Footer };
