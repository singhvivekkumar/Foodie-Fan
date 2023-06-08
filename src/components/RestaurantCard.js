import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
	const {
		cloudinaryImageId,
		name,
		avgRating,
		deliveryTime,
		cuisines,
		slaString,
		costForTwo,
		aggregatedDiscountInfo,
	} = props;
	return (
		<div className=" w-60 m-4 p-2 bg-orange-50 shadow-md border-orange-100 border-solid border-2">
			<img src={IMG_CDN_URL + cloudinaryImageId} />
			<h2 className=" font-medium text-xl font-serif">{name}</h2>
			<h3>{cuisines.join(", ")}</h3>
			<h4>{avgRating} star </h4>
		</div>
	);
}

export default RestaurantCard;