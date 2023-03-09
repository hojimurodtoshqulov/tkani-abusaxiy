import React, { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import SearchResultItem from "../searchResultItem/SearchResultItem";
import c from "./navbar2.module.scss";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputBoxRef = useRef(null);

  const debouncedValue = useDebounce(searchQuery, 500);

  const toggleHandler = () => setShowResults(true);

  const fetchData = async (query) => {
    const res = await fetch(`http://localhost:9999/products?q=${query}`);
    const data = await res.json();
    setSearchResults(
      data.map((item, i) => ({
        ...item,
        imageUrl: `https://picsum.photos/200/200?random=${i}`,
        priceUnit: "uzs",
      }))
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputBoxRef.current && !inputBoxRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputBoxRef]);

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [debouncedValue]);

  return (
    <div ref={inputBoxRef} onClick={toggleHandler} className={c.form}>
      <form className={c.searchForm} action="">
        <input
          className={c.searchInput}
          type="text"
          value={searchQuery}
          placeholder="Поиск"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={c.searchicon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {showResults && (
          <div className={c.searchResult}>
            <div className={c.searchResultHead}>
              <p>Qidiruv natijasi ({searchResults.length})</p>
            </div>
            {searchResults.map((item) => (
              <SearchResultItem
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                priceUnit={item.priceUnit}
              />
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
