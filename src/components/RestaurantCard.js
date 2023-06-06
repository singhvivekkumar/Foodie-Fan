

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, address}) => {
	return (
		<div>
			<img src=""/>
			<h2>{name}</h2>
			<h3>{cuisines}</h3>
			<h3>{avgRating}</h3>
		</div>
	);
}

export default RestaurantCard;