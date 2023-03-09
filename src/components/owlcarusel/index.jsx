import React from "react";
import c from "./style.module.scss";
import dataCards from "../../data/cards.json";
import ProductCard from "../productCard/ProductCard";
export default function Owlcarousel() {
	// const dataLogos = [
	// 	{
	// 		// img: slideImg3,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// img: slideImg1,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// img: slideImg5,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg6,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg14,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg9,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg11,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg4,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg7,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg13,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg15,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg12,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg10,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg2,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg8,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg3,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg1,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg5,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg6,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg14,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg9,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// // img: slideImg11,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},
	// 	{
	// 		// img: slideImg4,
	// 		title: "Lorem ipsum dolor.",
	// 		description: " Lorem ipsum dolor sit amet consectetur.",
	// 		btnTitle: "more",
	// 	},

	// ];
	return (
		<div className={c.owlcarousel}>
			<div className={c.owl_title}>
				<div className={c.line1}></div>
				<h1>Game zone</h1>
				<div className={c.line2}></div>
			</div>

			<div className={c.sectionSlides}>
				<div className={c.slider}>
					<div className={c.slide_track}>
						{dataCards.products?.map((item, index) => (
							<div className={c.slide} key={index}>
								<ProductCard
									imageUrl={`https://picsum.photos/400/400?random=${item.id}`}
									title={item.title}
									price={item.price}
									madeIn="China"
									size="230sm/200sm"
									isNew
								/>
								{/* <img src={item.img} alt="skills logos" />
							<h3>{item.title}</h3>
							<p> {item.description} </p>
							<button> {item.btnTitle} </button> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
