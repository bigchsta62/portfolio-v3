import React from "react";
import "./style.css";
// import Card from "react-bootstrap/Card";
// import { projectData } from "../../data_sources/data_sources";

function Contact() {
  return (
    <main>
      <div className="card text-center">
        <div className="card-body">
          <div className="row justify-content-center">
            <h5 className="card-title">
              You can reach me on the following platforms :
            </h5>
          </div>
          <div className="row justify-content-center">
            <a
              href="https://www.linkedin.com/in/travis-miller-726451137/"
              className="fa fa-linkedin"
              id="linkedin"
            ></a>
            <a
              href="https://github.com/bigchsta62"
              className="fa fa-github"
              id="github"
            ></a>
            <a
              href="mailto:bigchsta62@gmail.com"
              className="fa fa-envelope"
              id="email"
            ></a>
            <a
              href="https://www.facebook.com/travis.miller.587268"
              className="fa fa-facebook"
              id="facebook"
            ></a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
