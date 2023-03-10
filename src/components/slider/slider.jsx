import React from "react";
import { Carousel } from "antd";
import c from "./slider.module.scss";
import Button from "../button/button";
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
					<img
						style={contentStyle}
						src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg"
						alt=""
					/>
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
			</Carousel>
		</div>
	);
}
