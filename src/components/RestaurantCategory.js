import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ card }) => {
  const [collapse, setCollapse] = useState(false);
  const _card =
    card?.card?.card?.categories?.[0]?.itemCards ?? card?.card?.card?.itemCards;
  return (
    <div className="rounded-t-lg bg-white">
      <h2 className="mb-0" id="headingOne">
        <button
          className="group  relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white "
          type="button"
          onClick={() => setCollapse(!collapse)}
        >
          {card?.card?.card?.title} ({_card?.length})
          <span
            className={`ml-auto h-5 w-5 shrink-0 rotate-[${
              collapse ? "0deg" : "-180deg"
            }] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </h2>

      {_card?.map((card) => (
        <ItemList card={card?.card} key={card?.card?.info?.id} collapse={collapse} />
      ))}
    </div>
  );
};

export default RestaurantCategory;
