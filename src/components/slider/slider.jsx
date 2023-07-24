// import { Carousel } from "antd";
import React from "react";
import c from "./slider.module.scss";
import Button from "../button/button";
import tkaniVideo1 from "../../media/videos/tkani.mp4";
import img2 from "../../media/slider-h2.jpg";
import img3 from "../../media/furnitura2.png";
import img4 from "../../media/asd.jpg";
import Slider from "react-slick";
const contentStyle = {
  width: "100%",
  color: "blue",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
  };

export default function Headercarusel() {

  return (
    <div className={c.carousel}>
        <Slider {...settings} className={c.carouselDiv}>
    <div className={c.slide}>
          <video className={c.video} style={contentStyle} src={tkaniVideo1} muted autoPlay loop></video>
          <h1>ТКАНИ ДЛЯ ПЛАТЬЯ</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Button
            btnTitle={"Banner Button"}
            btnClassName="buttonDenger"
            link="/blabla"
          />
        </div>
        <div className={c.slide}>
          <img
            style={contentStyle}
            src={img2}
            alt="ТКАНИ ДЛЯ ДОМА"
          />
          <h1>ТКАНИ ДЛЯ ДОМА</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Button
            btnTitle={"bla Button"}
            btnClassName="buttonDenger"
            link="/blablass"
          />
        </div>
        <div className={c.slide}>
          <img
            style={contentStyle}
            src={img3}
            alt="ФУРНИТУРА"
          />
          <h1>ФУРНИТУРА</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Button
            btnTitle={"Banner Button"}
            btnClassName="buttonDenger"
            link="/blablass"
          />
        </div>
        <div className={c.slide}>
          <img
            style={contentStyle}
            src={img4}
            alt="ГОТОВЫЕ ФАСОНЫ"
          />
          <h1>ГОТОВЫЕ ФАСОНЫ</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Button
            btnTitle={"Banner Button"}
            btnClassName="buttonDenger"
            link="/blablass"
          />
        </div>
        </Slider>
    </div>

  )
}