import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import c from "./home.module.scss";

const Home = () => {
  return (
    <div className={c.home}>
      <ProductCard
        imageUrl="https://picsum.photos/400/400?random=1"
        title=" Dak ( suv otqazmidi) Tarkibi : 65% paxta 35% poliesterEni: 180cm"
        price={2323}
        madeIn="China"
        size='230sm/200sm'
        isNew
      />
    </div>
  );
};

export default Home;
