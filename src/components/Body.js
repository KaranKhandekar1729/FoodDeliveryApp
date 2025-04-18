import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.202367945356468&lng=72.83034203119135&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json =  await data.json();
        console.log(JSON.stringify(json, null, 2));
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    if (listOfRestaurants.length === 0) {
     return <Shimmer />;   
    };

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListOfRestaurants(filteredList)
                    }}
                >

                </button>
            </div>
            <div className="res-container">
              {listOfRestaurants.map((resData) => (
                <RestaurantCard key={resData?.info.id} resData={resData} />
              ))}   
            </div>
        </div>
    )
};

export default Body;