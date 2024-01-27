import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = (props) => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const listOfRestaurant = useRestaurant();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    listOfRestaurant?.length && setFilteredRestaurant(listOfRestaurant);
  }, [listOfRestaurant]);

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
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
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
          <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
