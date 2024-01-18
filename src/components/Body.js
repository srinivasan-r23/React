import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((res) => (
          <RestaurantCard resData={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
