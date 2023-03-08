import React from "react";
import Menu from "../../components/menu/menu";
import c from "./home.module.scss";

const Home = () => {
	return (
		<div className={c.home}>
			<div className={c.header}>
				<div className={c.menu}>
					<Menu />
				</div>
				<div className={c.slider}></div>
			</div>
		</div>
	);
};

export default Home;
