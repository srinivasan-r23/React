import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((slice) => slice.cart.items);
    const dispatch = useDispatch();
    
  console.log(cartItems);
    if(cartItems?.length <= 0) return <h1>Your cart is empty</h1>
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className="w-6/12 m-auto">
        {
            cartItems?.map((cartItem, index) =>  <ItemList card={cartItem} key={cartItem?.info?.id + index} />)
        }
       
      </div>
    </div>
  );
};

export default Cart;
