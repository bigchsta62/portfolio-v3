import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
// import { projectData } from "../../data_sources/data_sources";
// import Travis_Miller from "../files"
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
      <Card className="card text-white bg-dark mb-3">
        <Card.Header>
          <h3>Resume</h3>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <embed
              src="files/Travis_Miller.pdf#toolbar=1&navpanes=0&scrollbar=0"
              type="application/pdf"
              width="100%"
              height="600px"
            />
            <footer className="blockquote-footer">
              Thank you for your interest{" "}
              <cite title="Source Title">- Travis Miller</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Contact;
