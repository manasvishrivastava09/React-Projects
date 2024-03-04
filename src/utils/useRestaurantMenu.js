import {useEffect,useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId)=>{
    //fetchdata

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${MENU_API}${restaurantId}`
        // 422863
      )}`);
      
    const { contents } = await data.json();
    const json = JSON.parse(contents);
    console.log(json);
       // const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
}

export default useRestaurantMenu;