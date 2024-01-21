import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    console.log(json);
    setResInfo(json);
  };
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo?.data?.cards?.[0]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <>
        {resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (card) => {
            const _card = card?.card?.card?.categories?.[0]?.itemCards ?? card?.card?.card?.itemCards;
            return (
              <div key={new Date().getTime()}>
                <h2>{card?.card?.card?.title}</h2>
                {_card?.map((card) => (
                  <div
                    key={card?.card?.info?.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>{card?.card?.info?.name}</p>
                    <p>₹{card?.card?.info?.price / 100}</p>
                  </div>
                ))}
              </div>
            );
          }
        )}
      </>
    </div>
  );
};

export default RestaurantMenu;
