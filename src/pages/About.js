import React from "react";
import "./style.css";
// import Card from "react-bootstrap/Card";
// import { projectData } from "../../data_sources/data_sources";

function About() {
  return (
    <main>
      <div className="col-lg-6 card">
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
              Hello, My name is Travis Miller. I am a self driven, Full Stack
              (MERN) Certified Developer from The University of Arizona's Full
              Stack Coding Bootcamp, with a passion for clean, beautiful code.
              A natural problem solver. My desire is to write world class code that has
              a positive impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
