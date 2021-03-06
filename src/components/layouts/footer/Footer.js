import React from "react";

const Footer = () => {
  
    return (
      <footer class="page-footer  blue lighten-1">
        <div class="footer-copyright  blue lighten-1">
          <div class="container">
            © {new Date().getFullYear()} Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  
}

export { Footer };
