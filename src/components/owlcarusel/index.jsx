import React from "react";
import c from "./style.module.scss";
import dataCards from "../../data/cards.json";
import ProductCard from "../productCard/ProductCard";

export default function Owlcarousel() {
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
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
