import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { projectData } from "../data_sources/data_sources";
import { Link } from "react-router-dom/Link";
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-flex">
      <Carousel
        className="carousel slide carousel-fade"
        id="carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {projectData.map((data, key) => (
          <Carousel.Item key={key}>
            <img className="img-fluid" src={data.image} alt="First slide" />
            <Carousel.Caption>
              <footer>
                <button
                  className="btn btn-secondary"
                  href={data.url}
                  target="_blank"
                >
                  <h3>See Deployment</h3>
                </button>
              </footer>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
