import React from "react";
import scss from "./menu.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../media/tkani.jpg";
import img2 from "../../media/home.jpg";
import img3 from "../../media/furnitura.jpg";
import img4 from "../../media/gatovi.jpg";
import img5 from "../../media/new.jpg";
import img6 from "../../media/zakaz.jpg";
import img7 from "../../media/dostavka.jpg";
import img8 from "../../media/info.jpg";
import img9 from "../../media/all.jpg";
const Menu = () => {
	const logosData = [
		{
			img: img1,
			link: "/",
			title: "ТКАНИ ДЛЯ ПЛАТЬЯ",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
		{
			img: img2,
			link: "/",
			title: "ТКАНИ ДЛЯ ДОМА",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
		{
			img: img3,
			link: "/",
			title: "ФУРНИТУРА",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
		{
			img: img4,
			link: "/",
			title: "ГОТОВЫЕ ФАСОНЫ",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
		{
			img: img5,
			link: "/",
			title: "НОВИНКИ",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
		{
			img: img6,
			link: "/",
			title: "ЗАКАЗАТЬ",
		},
		{
			img: img7,
			link: "/",
			title: "ДОСТАВКА ПО ВСЕМУ МИРУ",
		},
		{
			img: img8,
			link: "/",
			title: "БОЛЬШЕ ИНФОРМАЦИИ",
		},
		{
			img: img9,
			link: "/",
			title: "ВСЕ ТОВАРЫ",
			r_icon: <i className="fa-solid fa-angle-right"></i>,
		},
	];
	return (
		<div className={scss.menu}>
			{logosData?.map((item, index) => (
				<Link to={item.link} key={index} className={scss.menu__link}>
					<img
						className={scss.menu__link_img}
						src={item.img}
						alt="oogos image"
					/>{" "}
					<h4> {item.title} </h4> <p>{item.r_icon}</p>
				</Link>
			))}
		</div>
	);
};

export default Menu;
