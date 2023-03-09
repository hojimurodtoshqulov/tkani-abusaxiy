import Button from "../../components/button/button";
import Headericon from "../../components/headericons";
import Menu from "../../components/menu/menu";
import Owlcarousel from "../../components/owlcarusel";
import ProductCard from "../../components/productCard/ProductCard";
import Headercarusel from "../../components/slider/slider";
import c from "./home.module.scss";
import cardsData from "../../data/cards.json";
const Home = () => {
	console.log("db>>>", cardsData.products);
	return (
		<div className={c.home}>
			<div className={c.header}>
				<div className={c.menu}>
					<Menu />
				</div>
				<div className={c.slider}>
					<Headercarusel />
					<Headericon />
					{/* <Button
						btnTitle={"bla bla"}
						btnClassName={"button"}
						link={"/blabla"}
					/> */}
				</div>
			</div>

			<div className={c.cards}>
				{cardsData.products?.map((item, index) => (
					<div className={c.card}>
						<ProductCard
							key={index}
							imageUrl={`https://picsum.photos/400/400?random=${item.id}`}
							title={item.title}
							price={item.price}
							madeIn="China"
							size="230sm/200sm"
							isNew
						/>
					</div>
				))}
				{/* <ProductCard /> */}

				{/* <ProductCard
					imageUrl="https://picsum.photos/400/400?random=1"
					title=" Dak ( suv otqazmidi) Tarkibi : 65% paxta 35% poliesterEni: 180cm"
					price={2323}
					madeIn="China"
					size="230sm/200sm"
					isNew
				/> */}
			</div>

			<div className={c.carousel}>
				<Owlcarousel />
			</div>
		</div>
	);
};

export default Home;
