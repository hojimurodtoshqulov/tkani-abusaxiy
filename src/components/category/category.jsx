import React from "react";
import c from "./category.module.scss";
import { Link } from "react-router-dom";
// import DataCateg from "../../data/categsData";
import Img1 from "../../media/png1.png";

const Category = ({ imgUrl, desc }) => {
	return (
		<div className={c.categoryMain}>
			<h3 className={c.title}>Категории для геймеров</h3>
			<div className={c.circlesWrap}>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} />
					</div>
					<p>Клавиатуры</p>
				</Link>
			</div>
		</div>
	);
};

export default Category;
