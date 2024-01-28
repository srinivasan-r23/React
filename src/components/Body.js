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
    <div className="m-4">
      <div className="flex items-center justify-between">
        <div className="m-4 p-4 flex w-full">
          <div className="flex flex-1">
          <input
            type="text"
            className="border border-solid border-slate-300 px-4 rounded-md flex-1 outline-none"
            onChange={(e) => setSearchText(e?.target?.value)}
            value={searchText}
          /></div>
          <button
            className="px-4 py-2 bg-green-300 m-4 rounded-lg"
            onClick={() => searchHandler()}
          >
            Search
          </button>
        </div>
        <div className=""> 
          <button className="px-4 py-2 bg-orange-300 rounded-lg" onClick={filterHandler}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
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
