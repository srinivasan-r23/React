import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const filterHandler = () => {
    const filteredRestaurant = resList?.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setListOfRestaurant(filteredRestaurant);
  };
  const searchHandler = (e) => {
    const query = e.target.value;
    const filteredRestaurant = resList?.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(query)
    );
    setListOfRestaurant(filteredRestaurant);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">
        <input type="text" className="search-input" onChange={searchHandler} />
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((res) => (
          <RestaurantCard resData={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
