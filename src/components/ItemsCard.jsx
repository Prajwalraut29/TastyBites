import React from "react";
import Data from "../data/Data";
import Card from "./Card";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const ItemsCard = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state)=>state.search.search)
  const handleToast = (name) => toast.success(`${name} Added Successfully `);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-8 items-center justify-center mx-6 my-10">
        {Data.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
           return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => {
          return  <Card
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              desc={food.desc.slice(0, 30)}
              rating={food.rating}
              category={food.category}
              price={food.price}
              handleToast={handleToast}
            />
        })}

      </div>
    </>
  );
};

export default ItemsCard;
