import React from "react";
import "./style.css";
// import Card from "react-bootstrap/Card";
// import { projectData } from "../../data_sources/data_sources";

function About() {
  return (
    <main>
      <div className="col-lg-7 card">
        <div className="card text-white mb-3">
          <img
            className="card-img-top"
            src="./images/IMG_3146.jpg"
            alt="Travis wearing a Phoenix Suns hat"
            id="img1"
          />
          <div className="row no-gutters">
            <h5 className="card-title">About Me</h5>
            <p className="card-text">
              Hello, My name is Travis Miller. I am an aspiring web developer,
              from Chandler, AZ. I have been married to the love of my life,
              Ashtyn, for 14 years. We have 4 awesome kids, Greylon, Sawyer,
              McKinley, and most recently Atlas. We homeschool, love to go on
              random adventures, and are passionate about helping the
              commmunity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
