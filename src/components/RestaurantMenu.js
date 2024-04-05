import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const avgRating = resInfo?.cards?.[2]?.card?.card?.info?.avgRating;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(', ')} - {costForTwoMessage}
        {avgRating}
      </p>
      {/** categories accordians */}
      {categories?.map((category, index) => (
        //Controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          info={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prevIndex) => {
              if (prevIndex === index) {
                return null;
              } else {
                return index;
              }
            })
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
