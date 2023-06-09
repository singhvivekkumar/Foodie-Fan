import { IMG_CDN_URL } from "../config";
import "font-awesome/css/font-awesome.min.css";

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

  const rating = (
    <span className=" font-thin">
      {avgRating >= 4.0 ? (
        <span className="fa fa-star bg-green-500 text-white p-1">
          {' '+avgRating}
        </span>
      ) : (
        <span className="fa fa-star bg-orange-500 text-white p-1">
          {' '+avgRating}
        </span>
      )}
    </span>
  );
  return (
    <div className="flex flex-col w-72 m-4 p-4 hover:shadow-lg border-solid hover:border ">
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className=" font-sans py-2">
        <div className=" text-lg font-medium  ">{name}</div>
        <div className=" text-sm italic ">{cuisines.join(", ")}</div>
      </div>
	
      <div className="flex justify-between text-xs font-normal pt-2 ">
        <span >{rating}</span>
        <span >.</span>
        <span >{deliveryTime} min</span>
        <span >.</span>
        <span >₹{costForTwo / 100 + " FOR TWO"}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
