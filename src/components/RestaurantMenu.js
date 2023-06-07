import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const menuId = useParams();
	const {id} =menuId


	const restaurantMenu = useRestaurantMenu(id);	

	
	console.log("whole componentw")
	return (
		<div>
			<h1>Restaurant id :{menuId.id}</h1>
			<h3>Name of restaurant : {restaurantMenu?.name}</h3>
		</div>
	);
}
export default RestaurantMenu;