import React from "react";
import SocialLinks from "../SocialLinks";
import PageLinks from "../PageLinks";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <div className="container-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className="navbar-brand">
          Travis Miller
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <PageLinks />
          </ul>
          <span className="navbar-text">

          </span>
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
