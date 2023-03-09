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
      <ProductCard
        imageUrl="https://picsum.photos/400/400?random=1"
        title=" Dak ( suv otqazmidi) Tarkibi : 65% paxta 35% poliesterEni: 180cm"
        price={2323}
        madeIn="China"
        size='230sm/200sm'
        isNew
      />

			<div className={c.carousel}>
				<Owlcarousel/>
			</div>
		</div>
	);
};

export default Home;
