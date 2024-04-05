import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  //local state variable-super powerful  variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!Please check your internet connection!!!
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="Body bg-gray-500">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4">
          {' '}
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                //res.info.avgRating > 4.5;
                // console.log(res.info.avgRating);
                return res.info.avgRating > 4.5;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 my-10">
          {/* <label>User Name </label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input> */}
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

