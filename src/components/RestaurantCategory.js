import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ info, showItems, setShowIndex }) => {
 
 // console.log(info);
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(info);

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {info.title} ({info.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={info.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;