import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;
  const categories =
    resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="p-8 w-2/3 mx-auto">
      <h1 className="font-bold text-4xl text-red-600 bg-red-100 rounded-2xl text-center py-2 mb-4">
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.name}
      </h1>
      <p className="text-2xl bg-slate-100 rounded-2xl py-2 mb-2 text-center">
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <>
        {categories?.map((card) => {
          return (
            <div key={new Date().getTime()} className="">
              {card?.card?.card?.title && (
                <RestaurantCategory card={card} key={card?.card?.card?.title} />
              )}
              <hr className="my-6" />
            </div>
          );
        })}
      </>
    </div>
  );
};

export default RestaurantMenu;
