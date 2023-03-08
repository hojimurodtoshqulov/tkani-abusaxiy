import React from "react";
import { Link } from "react-router-dom";
import c from "./style.module.scss";

function SearchResultItem({ slug = "", imageUrl, title, price, priceUnit }) {
  return (
    <Link to={`/${slug}`} className={c.searchResultItem}>
      <div className={c.searchResultItemImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <p className={c.searchResultItemTitle}>{title}</p>
      <p className={c.searchResultItemPrice}>
        {price} {priceUnit}
      </p>
    </Link>
  );
}

export default SearchResultItem;
