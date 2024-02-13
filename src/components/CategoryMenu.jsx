import React, { useEffect, useState } from "react";
import Data from "../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { SetCategory } from "../Redux/categorySlice";
const CategoryMenu = () => {
  const [categories, setcategories] = useState([]);

  const ListuniqueCat = () => {
    const uniqueCategory = [...new Set(Data.map((item) => item.category))];
    setcategories(uniqueCategory);
  };

  useEffect(() => {
    ListuniqueCat();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6 mt-4">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(SetCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(SetCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
