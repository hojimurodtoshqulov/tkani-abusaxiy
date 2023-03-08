import React from "react";
import Headericon from "../../components/headericons";
import Menu from "../../components/menu/menu";
import Owlcarousel from "../../components/owlcarusel";
import ProductCard from "../../components/productCard/ProductCard";
import Headercarusel from "../../components/slider/slider";
import c from "./home.module.scss";

const Home = () => {
	return (
		<div className={c.home}>
			<div className={c.header}>
				<div className={c.menu}>
					<Menu />
				</div>
				<div className={c.slider}>
					<Headercarusel/>
					<Headericon/>
				</div>
			</div>

			<div className={c.cards}>
				<ProductCard/>
			</div>

			<div className={c.carousel}>
				<Owlcarousel/>
			</div>
		</div>
	);
};

export default Home;
