import React from "react";
import c from "./style.module.scss";
import dataCards from "../../data/cards.json";
import ProductCard from "../productCard/ProductCard";
const Carousel = () => {
	return (
		<div className={c.sectionSlides}>
			<div className={c.slider}>
				<div className={c.slide_track}>
					{dataCards.products?.map((item, index) => (
						<div className={c.slide} key={index}>
							<ProductCard
								imageUrl={`https://picsum.photos/400/400?random=${item.id}`}
								title={item.title}
								price={item.price}
								madeIn="Dubai"
								size="150sm/200sm"
								isNew
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
