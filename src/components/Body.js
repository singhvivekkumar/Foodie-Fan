import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

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
		setRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);
		setFliterRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards);
	}

	return ( fliterRestaurantData.length === 0)? <ShimmerUI/> : (
		<div className=" px-10">
			{/* Search bar */}
			<div className=" flex justify-center mx-28 p-2 m-4 shadow-lg bg-orange-100">
				<input
					className="  font-serif text-center text-lg rounded-lg border-orange-400"
					type="search"
					placeholder="search"
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
					}}>Search</button>
			</div>

			{/* cards */}
			<div className="flex flex-wrap justify-center ">
				{fliterRestaurantData.map((restaurant) => {
					return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
				})}
			</div>
		</div>
	);
};

export default Body;
