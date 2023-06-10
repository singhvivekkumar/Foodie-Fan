import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_ID_URL } from "../config";

const RestaurantMenu = () => {
	const {id} = useParams();
	const [restaurant, setRestaurant] = useState();

	useEffect( ()=> {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(RESTAURANT_ID_URL);
		const jsonData = await data.json();
		setRestaurant(jsonData?.data);
		console.log(jsonData?.data);
	}

	
	console.log("whole componentw")
	return (
		<div>
			<h1>Restaurant id :{id}</h1>
			<h3>Name of restaurant : {restaurant}</h3>
		</div>
	);
}
export default RestaurantMenu;