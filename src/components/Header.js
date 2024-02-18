import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-600 shadow-xl ">
      <div className="logo-container cursor-pointer">
      <Link to="/"><img className="w-36" src={LOGO_URL} /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "✅" : "⭕"}</li>
          <li className="rounded-lg px-4 text-lg text-slate-50 hover:bg-white hover:text-gray-900">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 rounded-lg text-lg text-slate-50 hover:bg-white hover:text-gray-900">
            <Link to="/about">About Us</Link>
          </li>
          <li className="rounded-lg px-4 text-lg text-slate-50 hover:bg-white hover:text-gray-900">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="rounded-lg px-4 text-lg text-slate-50 hover:bg-white hover:text-gray-900">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="rounded-lg px-4 text-lg text-slate-50 hover:bg-white hover:text-gray-900"><Link to="/cart">Cart {`${cartItems?.length} items`}</Link></li>
          <button
            className="rouned-lg bg-white  px-4 rounded-lg font-medium py-1 hover:shadow-xl hover:bg-orange-600 hover:text-white mx-4"
            onClick={() => setBtnName(btnName === "Login" ? user?.user : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
