import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

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

	return (
		<div>
			{/* Search bar */}
			<div className="search-container p-2 ml-auto border-black">
				<input
					className="w-64 text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
					type="text"
					placeholder="search"
					value={searchInput}
					onChange={(eventProps) => {
						setSearchInput(eventProps.target.value);
					}}
				/>
				<button
					className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700"

					onClick={() => {
						const data = fliterData(searchInput, restaurantData);
						setFliterRestaurantData(data);
					}}>Search</button>
			</div>

			{/* cards */}
			<div className="flex flex-wrap justify-center">
				{fliterRestaurantData.map((restaurant) => {
					return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
				})}
			</div>
			{/* <div className=" flex flex-wrap justify-center">
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
			</div> */}
		</div>
	);
};

export default Body;
