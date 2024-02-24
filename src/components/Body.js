import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
  //local state variable-super powerful  variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

 
  return listOfRestaurants.length===0?<Shimmer />:(
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = (listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            ));
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {console.log(listOfRestaurants)}
      </div>
    </div>
  );
};

export default Body;
