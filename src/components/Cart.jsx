import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CardItems from "./Cartitems";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [active, setactive] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((total, items) => total + items.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, items) => total + items.price * items.qty,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full  bg-white p-5" 
     ${
       active ? "translate-x-0" : "translate-x-full"
     } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-2xl font-bold text-gray-800 ">my orders</span>
          <IoMdClose size={28}
            onClick={() => setactive(!active)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CardItems
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-3xl font-semibold mt5">
            Items is empty add items{" "}
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items :{totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className=" mb-5 bg-green-500 font-bold px-3 text-white py-2 rounded-md w-[90vw] lg:w-[18vw]"
          >
            CheckOut:{" "}
          </button>
        </div>
      </div>
      <div
        onClick={() => setactive(!active)}
        className={`cursor-pointer rounded-full bg-white shadow-md text-3xl p-2 fixed bottom-10 right-4
        ${totalQty > 0 && "animate-bounce delay-100 trasition-all"}`}
      >
        <FaShoppingCart />
        {cartItems.length > 0 ? (
          <span className=" bg-red-500 shadow-md text-sm rounded-full p-1 fixed  bottom-10 right-3">
            {cartItems.length}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
