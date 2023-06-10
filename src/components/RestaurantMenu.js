import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_ID_URL } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
	const {id} = useParams();
	const [restaurant, setRestaurant] = useState({});

	useEffect( ()=> {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}&submitAction=ENTER`);
		const jsonData = await data.json();
		setRestaurant(jsonData?.data?.cards[0]?.card?.card.info);
		console.log(jsonData?.data?.cards[0]?.card?.card.info);
	}


	
	console.log("whole component")
	return (!restaurant)? <ShimmerUI/> : (
		<div className=" flex flex-col font-serif m-5 p-4">
			<div className=" flex justify-evenly ">
				<span className=" text-3xl font-semibold">{restaurant.name}</span>
				<span className=" fa fa-star-half-empty ">{restaurant.avgRating}</span>
				<img className=" h-52 w-80 " src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
			</div>
			<div></div>
			<div></div>
		</div>
	);
}
export default RestaurantMenu;