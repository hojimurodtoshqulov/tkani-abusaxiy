import React from "react";
import { Carousel } from "antd";
import c from "./slider.module.scss";
import Button from "../button/button";
import tkaniVideo1 from "../../media/videos/tkani.mp4";
import pastel from "../../media/slider-h2.jpg";
import furnitura from "../../media/furnitura2.png";
import readyFashion from "../../media/asd.jpg";
const contentStyle = {
	width: "100%",
	height: "70vh",
	color: "blue",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

export default function Headercarusel() {
	return (
		<div className={c.carousel}>
			<Carousel autoplay className={c.carouselDiv}>
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
						src={pastel}
						alt=""
					/>
					<h1>Tkani dlya doma</h1>
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
						src={furnitura}
						alt=""
					/>
					<h1>furnitura </h1>
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
						src={readyFashion}
						alt=""
					/>
					<h1>gatovi fasoni</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<Button
						btnTitle={"Banner Button"}
						btnClassName="buttonDenger"
						link="/blablass"
					/>
				</div>
			</Carousel>
		</div>
	);
}
