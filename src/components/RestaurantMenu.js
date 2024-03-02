import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${MENU_API}${restaurantId}`
        // 422863
      )}`
    );
    const { contents } = await data.json();
    const json = JSON.parse(contents);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{' '}
            {item?.card?.info?.price || item?.card?.info?.defaultprice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
