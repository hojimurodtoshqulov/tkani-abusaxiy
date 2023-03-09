import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { BsCartPlus } from "react-icons/bs";



function ProductCard({ imageUrl, title, price, priceUnit, slug = "", isNew }) {
function ProductCard({
  imageUrl,
  title,
  madeIn,
  size,
  price,
  slug = "",
  isNew,
}) {
  return (
    <div className={styles.card}>
      <div>
        {isNew && (
          <span className={styles.new_label}>Новинка &nbsp;&nbsp;&nbsp;</span>
        )}
        <div className={styles.cardHead}>
          <button
            className={styles.addToCardBtn}
            onClick={() => console.log("Click")}
            title="add to card"
          >
            <BsCartPlus />
          </button>
        </div>
        <Link to={`/${slug}`}>
          <div className={styles.cardImgBox}>
            <img src={imageUrl} alt={title} />
          </div>
          <span className={styles.title}>{title}</span>
          <div className={styles.extraInfo}>
            <span className={styles.extraInfoItem}>
              <span>width/height:</span> {size}
            </span>
            <span className={styles.extraInfoItem}>
              <span>made in:</span> {madeIn}
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.priceWrap}>
          <span className={styles.priceNumber}>{price}</span>
          <span className={styles.priceUnit}>uzs</span>
        </div>
        <button className={styles.oneClickBtn}>One click buy</button>
      </div>
    </div>
  );
}
}
export default ProductCard
