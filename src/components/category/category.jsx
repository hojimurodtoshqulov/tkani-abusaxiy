import React from "react";
import c from "./category.module.scss";
import { Link } from "react-router-dom";
// import DataCateg from "../../data/categsData";
import Img1 from "../../media/pngegg.png";

const Category = ({ imgUrl, desc }) => {
	return (
		<div className={c.categoryMain}>
			<h3 className={c.title}>Категории</h3>
			<div className={c.circlesWrap}>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src="https://pavshino-tkani.ru/wp-content/uploads/2022/03/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D0%B2-%D0%BF%D0%B0%D0%B2%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE%D0%B9%D0%BC%D0%B5.png" />
					</div>
					<p>ТКАНИ ДЛЯ ПЛАТЬЯ</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src="https://alexvit.by/sites/default/files/bg/1-main_img.png" />
					</div>
					<p>ТКАНИ ДЛЯ ДОМА</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src="https://mir-tkaney.com.ua/images/furniture.png" />
					</div>
					<p>ФУРНИТУРА</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src={Img1} style={{ height: "110%", objectFit: "contain" }} />
					</div>
					<p>ГОТОВЫЕ ФАСОНЫ</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src="https://1.bp.blogspot.com/-3W_-NItisSA/V4VH7PBHzHI/AAAAAAAAEHA/TgtFVSPPEJosPTcBI3dGIVIct8SF9LGqQCLcB/s1600/1520_10.png" />
					</div>
					<p>НОВИНКИ</p>
				</Link>
				<Link to={"/"} className={c.card}>
					<div className={c.circle}>
						<img src="https://peretyajka.by/images/Tkani-dlya-peretyazhki-mebeli.png" />
					</div>
					<p>ЗАКАЗАТЬ</p>
				</Link>
			</div>
		</div>
	);
};

export default Category;
