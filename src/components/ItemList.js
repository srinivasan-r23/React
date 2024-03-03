import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ card, collapse }) => {
  const price = card?.info?.price ?? card?.info?.defaultPrice;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div data-testid="foodItems"
      className={`flex justify-between pb-2 text-lg p-2 ${
        collapse ? "hidden" : "block"
      }`}
    >
      <div>
        <p className="text-lg">{card?.info?.name}</p>
        <p className="text-sm">₹{price / 100}</p>
        <p className="text-xs w-1/2 text-slate-400 pt-2">
          {card?.info?.description}`
        </p>
      </div>
      <>
        {card?.info?.imageId && (
          <div>
            <img
              src={CDN_URL + card?.info?.imageId}
              alt={card?.info?.name}
              className="w-32 object-contain rounded-xl"
            />
            <button
              type="submit"
              className="rounded-lg border-orange-500 border w-full text-xs"
              onClick={() => handleAddItem(card)}
            >
              Add
            </button>
          </div>
        )}
        {!card?.info?.imageId && (
          <button
            type="submit"
            className="rounded-lg border-orange-500 border px-3 text-xs"
            onClick={() => handleAddItem(card)}
          >
            Add
          </button>
        )}
      </>
    </div>
  );
};

const withBestSeller = (ItemList) => {
  return (props) => {
    const isBestSeller = props?.card?.info?.isBestseller;
    return (
      <div className="relative" >
        {isBestSeller && (
          <p className="absolute text-[#ee9c00] inline-block top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        )}
        <ItemList {...props} />
      </div>
    );
  };
};
export default withBestSeller(ItemList);
