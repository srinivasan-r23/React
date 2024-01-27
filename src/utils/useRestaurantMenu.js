import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    console.log(json);
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
