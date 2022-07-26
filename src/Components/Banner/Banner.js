import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../Assets/Images/banner/fruits.png";
// import banner2 from "../../Assets/Images/banner/mixed.png";
import banner3 from "../../Assets/Images/banner/banner.png";
import "./Banner.css";
import React from "react";
const Banner = () => {
  return (
    <Carousel className="banner">
      <Carousel.Item>
        <img className="d-block w-100 " src={banner3} alt="First slide" />
        <div className="overlay"></div>

        <Carousel.Caption>
          <div className=" banner-text mb-5">
            <p>
              <small className="text-primary fw-bold ">2022 COLLECTION​</small>
            </p>
            <h2 className="text-4xl font-bold mb-2">
              All Your favourite is Right Here
            </h2>
            <p className="text-carousal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a className="button1" target="blank" href="{}">
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay"></div>

        <img className="d-block w-100" src={banner1} alt="Second slide" />

        <Carousel.Caption>
          <div className=" banner-text mb-5">
            <p>
              <small className="text-accent fw-bold ">2022 COLLECTION​</small>
            </p>
            <h2 className="text-4xl font-bold mb-2">
              All Your favourite is Right Here
            </h2>
            <p className="text-carousal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a className="button1" target="blank" href="{}">
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
