import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  const images = [
    "dance2.jpg",
    "medi3.jpg",
    "yoga1.jpg",
    "yoga2.jpg",
    "medi4.jpg"
  ];

  return (
    <div className="container">
      <p className="display-5 text-center my-2">
        Mindfulness! We care about your mental wellbeing..
      </p>
      <Carousel
        className="carousel-container"
        style={{ width: "1200px", height: "100%", aspectRatio: "16/9" }}
        interval={2000} // Set the interval to 2000 milliseconds (2 seconds)
        fade // Add the fade effect
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={image}
              alt={`Slide ${index}`}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
