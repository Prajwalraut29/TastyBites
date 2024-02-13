import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { decrement, increment, removecart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const CardItems = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg mb-4 p-2">
        <MdDelete
          key={id}
          onClick={() => {
            dispatch(removecart({ id, img, name, price, qty }));
            toast(`${name} Removed From Cart`, {
              icon: "👏",
            });
          }}
          className="abosolute right-7  text-red-500 cursor-pointer"
        />

        <img className="w-[50px] h-[50px]" src={img} alt="" />

        <div className="leading-5">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">{price}₹</span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              <AiOutlineMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrement({ id })) : (qty = 0)
                }
                className="border-2 border-gray-800 text-gray-800 hover:text-white hover: bg-green-400 border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>

              <AiOutlinePlus
                onClick={() =>
                  qty >= 1 ? dispatch(increment({ id })) : (qty = 0)
                }
                className={`border-2 border-gray-800 text-gray-800 hover:text-white hover: bg-green-400 border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItems;
