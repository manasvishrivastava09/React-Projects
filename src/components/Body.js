import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  //local state variable-super powerful  variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      )}`
    );
    const { contents } = await data.json();
    const json = JSON.parse(contents);
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              //Filter the restaurants and update the UI
              //Search text
              const filteredRestrauant = listOfRestaurants.filter((res) =>
                res.info.name.includes(searchText)
              );
              setFilteredRestaurant(filteredRestrauant);
            }}
          >
            search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {console.log(listOfRestaurants)}
      </div>
    </div>
  );
};

export default Body;
