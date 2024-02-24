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
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(listOfRestaurants.length===0){
    return <Shimmer />;   
  };
  // let listOfRestaurants=[
  //     {
  //     "info": {
  //       "id": "535576",
  //       "name": "La Pino'z Pizza",
  //       "cloudinaryImageId": "qt2ojkafzprlgpdl4a4y",
  //       "locality": "Bandra West",
  //       "areaName": "Santacruz",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Pastas",
  //         "Beverages"
  //       ],
  //       "avgRating": 3.1,
  //       "veg": true,
  //       "parentId": "4961",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 20,
  //         "lastMileTravel": 1.1,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "20-25 mins",
  //         "lastMileTravelString": "1.1 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-02-23 06:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "v1695133679/badges/Pure_Veg111.png",
  //             "description": "pureveg"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "pureveg",
  //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {

  //           },
  //           "textExtendedBadges": {

  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "50% OFF",
  //         "subHeader": "UPTO ₹100"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {

  //         },
  //         "subTitle": {

  //         },
  //         "message": {

  //         },
  //         "customIcon": {

  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {

  //           },
  //           "video": {

  //           }
  //         }
  //       },
  //       "reviewsSummary": {

  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {

  //       }
  //     },
  //     "analytics": {
  //       "context": "seo-data-1fff3106-b461-416c-b517-4bf6bc1a830b"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-bandra-west-santacruz-mumbai-535576",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "303060",
  //       "name": "Baskin Robbins - Ice Cream Desserts",
  //       "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
  //       "locality": "Saraswati Road",
  //       "areaName": "Santacruz West",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Desserts",
  //         "Ice Cream"
  //       ],
  //       "avgRating": 4.5,
  //       "veg": true,
  //       "parentId": "5588",
  //       "avgRatingString": "4.5",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 17,
  //         "lastMileTravel": 1.9,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "15-20 mins",
  //         "lastMileTravelString": "1.9 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-02-23 06:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "textExtendedBadges": [
  //           {
  //             "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
  //             "shortDescription": "Perfect Cake Delivery",
  //             "fontColor": "#7E808C"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {

  //           },
  //           "textBased": {

  //           },
  //           "textExtendedBadges": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "",
  //                   "fontColor": "#7E808C",
  //                   "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
  //                   "shortDescription": "Perfect Cake Delivery"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "30% OFF",
  //         "subHeader": "UPTO ₹75"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {

  //         },
  //         "subTitle": {

  //         },
  //         "message": {

  //         },
  //         "customIcon": {

  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {

  //           },
  //           "video": {

  //           }
  //         }
  //       },
  //       "reviewsSummary": {

  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {

  //       }
  //     },
  //     "analytics": {
  //       "context": "seo-data-1fff3106-b461-416c-b517-4bf6bc1a830b"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-saraswati-road-santacruz-west-mumbai-303060",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   }
  // ];

  return (
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
