import React from "react";
import image1 from "../../public/d kiba.jpg";
import image2 from "../../public/d naruto.jpg";
import image3 from "../../public/d shinigami.jpg";
import image4 from "../../public/sasuke.jpg";

function Carousel() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button>
        </div>
        <center>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                alt="Los Angeles"
                className="d-block"
                height={600}
                width={1200}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                alt="Chicago"
                className="d-block"
                height={600}
                width={1200}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                alt="New York"
                className="d-block"
                height={600}
                width={1200}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={image4}
                alt="New York"
                className="d-block"
                height={600}
                width={1200}
              ></img>
            </div>
          </div>
        </center>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
