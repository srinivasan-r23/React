import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = (props) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

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
  };
  const filterHandler = () => {
    const filteredRestaurant = listOfRestaurant?.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setListOfRestaurant(filteredRestaurant);
  };
  const searchHandler = (e) => {
    const query = e.target.value;
    const filteredRestaurant = listOfRestaurant?.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(query)
    );
    setListOfRestaurant(filteredRestaurant);
  };
  if (listOfRestaurant?.length === 0) return <h1>Loading</h1>;
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
