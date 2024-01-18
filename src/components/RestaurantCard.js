import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    resData: {
      info: { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla },
    },
  } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
