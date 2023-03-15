import React from "react";
import Carousel from "./carousel";
import c from "./style.module.scss";
import Category from "../category/category"
import newsBgVideo from "../../media/videos/tkani-video.mp4";
export default function News() {
	return (
		<div className={c.news}>
			<div className={c.news_title}>
				<div className={c.line1}></div>
				<h1>News</h1>
				<div className={c.line2}></div>
			</div>
			<Carousel />
			<Category />
			<video src={newsBgVideo} muted autoPlay loop></video>
		</div>
	);
}
