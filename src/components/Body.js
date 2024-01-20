import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // we need to convert the data into json;

    const json = await data?.json();
    setListOfRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const filterHandler = () => {
    const filteredRestaurant = listOfRestaurant?.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setFilteredRestaurant(filteredRestaurant);
  };
  const searchHandler = () => {
    const filteredRestaurant = listOfRestaurant?.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchText(e?.target?.value)}
            value={searchText}
          />
          <button onClick={() => searchHandler()}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant?.map((res) => (
          <RestaurantCard resData={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
