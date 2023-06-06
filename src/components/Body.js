import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function fliterData(searchInput, mainData) {
	const data = mainData.filter((restaurant) => {
		return restaurant.data.name.includes(searchInput);
	});
	console.log(data);
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
    setRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFliterRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);

    console.log(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div>
      {/* Search bar */}
      <div>
        <input
          className=""
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(eventProps) => {
            setSearchInput(eventProps.target.value);
          }}
        />
        <button onChange={() => {
			const data = fliterData(searchInput, restaurantData);
			setFliterRestaurantData(data);
		}}>Search</button>
      </div>

      {/* cards */}
      <RestaurantCard 
				name={card[0].data.name} 
				cuisines={card[0].data.cuisines}
				cloudinaryImageId={card[0].data.cloudinaryImageId}
				avgRating={card[0].data.avgRating}
				address={card[0].data.address}
			/>
	  <div className=" flex flex-wrap justify-center">
			{fliterRestaurantData.map((restaurants) => {
				return (
					<Link
						to={"restaurant/" + restaurants?.data?.id}
						key={restaurants.data.id}
					>
						<RestaurantCard {...restaurants.data} />
					</Link>
				);
			})}
			</div>
    </div>
  );
};

export default Body;
