import { useState } from "react";

const Sort = ({ setSortBy, setOrder, isSortVisible }) => {
  const [sortOption, setSortOption] = useState("title");
  const [orderOption, setOrderOption] = useState("asc");

  const handleSortOptions = (e) => {
    setSortOption(e.target.value);
    setSortBy(e.target.value);
  };

  const handleOrderOptions = (e) => {
    setOrderOption(e.target.value);
    setOrder(e.target.value);
  };
  return (
    <div className="container">
      <span className={isSortVisible ? `sortIsVisible` : `sortIsHidden`}>
        <div className="sortByRadioButtons">
          <label htmlFor="title">Title: </label>
          <input
            type="radio"
            value="title"
            checked={sortOption === "title"}
            onChange={handleSortOptions}
          />
          <label htmlFor="created_at">Date: </label>
          <input
            type="radio"
            value="created_at"
            checked={sortOption === "created_at"}
            onChange={handleSortOptions}
          />
          <label htmlFor="votes">Votes: </label>
          <input
            type="radio"
            value="votes"
            checked={sortOption === "votes"}
            onChange={handleSortOptions}
          />
        </div>
        <div className="orderRadioButtons">
          <label htmlFor="asc">Ascending: </label>
          <input
            type="radio"
            value="asc"
            checked={orderOption === "asc"}
            onChange={handleOrderOptions}
          />
          <label htmlFor="desc">Descending: </label>
          <input
            type="radio"
            value="desc"
            checked={orderOption === "desc"}
            onChange={handleOrderOptions}
          />
        </div>
      </span>
    </div>
  );
};

export default Sort;
