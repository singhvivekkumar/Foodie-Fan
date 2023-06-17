import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";

function fliterData(searchInput, mainData) {
  const data = mainData.filter((restaurant) => {
    return restaurant.data.name.includes(searchInput);
  });
  return data;
}

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [fliterRestaurantData, setFliterRestaurantData] = useState([]);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    let urlData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await urlData.json();

    // test the API
    // console.log(jsonData.data.cards)
    // console.log(jsonData?.data?.cards[2]?.data?.data?.cards)

    setRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFliterRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  if (useOffline()) {
    return (
      <h4 className="flex justify-center m-20 p-12">You are Offline!!!</h4>
    );
  }

  return fliterRestaurantData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className=" px-10 pt-4 ">
      {/* Search bar */}
      <div className=" sticky top-2 flex justify-evenly  mx-28 p-2 shadow-lg bg-orange-100">
        <div>
          <input
            className=" font-serif text-center p-2 focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 text-lg rounded-lg border-orange-400"
            type="search"
            placeholder="Search Restaurant"
            value={searchInput}
            onChange={(eventProps) => {
              setSearchInput(eventProps.target.value);
            }}
          />
          <button
            className="font-mono mx-10 text-center text-lg rounded-md bg-orange-400 p-2 text-white hover:shadow-lg hover:bg-orange-600  "
            onClick={() => {
              const data = fliterData(searchInput, restaurantData);
              setFliterRestaurantData(data);
            }}
          >
            Search
          </button>
        </div>
        <div className=" text-lg font-semibold">
          <i className=" fa fa-star-half-empty ">4.0 </i>
          <i className=" fa fa-toggle-on "></i>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-wrap justify-center ">
        {fliterRestaurantData?.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
