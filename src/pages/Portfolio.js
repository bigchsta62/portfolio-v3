import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { projectData } from "../data_sources/data_sources";
import "./style.css";
import styled, { keyframes } from "styled-components";
import BounceIn from "react-animations/lib/bounce-in";
const BounceInAnimation = keyframes`${BounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 5s ${BounceInAnimation};
`;

export default function ControlledCarousel() {
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
                <BounceInDiv>
                  <button className="btn btn-secondary">
                    <a href={data.url} target="_new">
                      <h3>See Deployment</h3>
                    </a>
                  </button>
                </BounceInDiv>
              </footer>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
