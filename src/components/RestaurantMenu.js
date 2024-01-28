import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
 
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="p-8 mx-12">
      <h1 className="font-bold text-4xl text-red-600 bg-red-100 rounded-2xl text-center py-2 mb-4">{resInfo?.data?.cards?.[0]?.card?.card?.info?.name}</h1>
      <p className="text-2xl bg-slate-100 rounded-2xl py-2 mb-2 text-center">
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.data?.cards?.[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <>
        {resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (card) => {
            const _card = card?.card?.card?.categories?.[0]?.itemCards ?? card?.card?.card?.itemCards;
            return (
              <div key={new Date().getTime()}>
                {card?.card?.card?.title && <h2 className="text-xl font-bold mt-4 mb-2 rounded-2xl bg-orange-100 p-4">{card?.card?.card?.title}</h2>}
                {_card?.map((card) => (
                  <div
                    key={card?.card?.info?.id} className="flex justify-between pb-2 text-lg"
                  >
                    <p className="">{card?.card?.info?.name}</p>
                    <p className="">₹{card?.card?.info?.price / 100}</p>
                  </div>
                ))}
                <hr className="my-6"/>
              </div>
            );
          }
        )}
      </>
    </div>
  );
};

export default RestaurantMenu;
