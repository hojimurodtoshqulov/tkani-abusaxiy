// import { Carousel } from "antd";
import React from "react";
import c from "./slider.module.scss";
import Button from "../button/button";
import tkaniVideo1 from "../../media/videos/tkani.mp4";
import Slider from "react-slick";
const contentStyle = {
	width: "100%",
	height: "70vh",
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
					<h1>tkani dlya platya</h1>
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
						src="https://cdn.pixabay.com/photo/2017/11/28/13/07/sunset-2983614__340.jpg"
						alt=""
					/>
					<h1>bla bla</h1>
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
						src="https://cdn.pixabay.com/photo/2015/10/30/20/13/boat-1014711__340.jpg"
						alt=""
					/>
					<h1>furnitura dlya platya</h1>
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
						src="https://cdn.pixabay.com/photo/2020/04/15/06/55/vietnam-5045344__340.jpg"
						alt=""
					/>
					<h1>gatovi tkani dlya platya</h1>
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
