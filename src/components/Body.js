import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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