import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";

const MenuItems = (props) => {
	const { id, image } = props;
	console.log(id);
	console.log("this is id ");
	const [menuItem, setMenuItem] = useState({});

	useEffect(() => {
		getMenuItems();
	}, []);

	async function getMenuItems() {
		const data = await fetch(`https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`);
		const jsonData = await data.json();
		// console.log(jsonData?.data?.menu?.items);
		setMenuItem(jsonData?.data?.menu?.items);
		console.log(menuItem);
	}

	return ((!menuItem) ? <ShimmerUI /> : (
		<div className=" flex justify-center m-2 p-2">
			<div className="flex flex-wrap">
				{(Object.values(menuItem)).map((item) => (
					<div className=" bg-slate-100 flex justify-between drop-shadow-md shadow-md border m-6 p-2 px-2 " key={item.id}>		
						<span className=" flex flex-col w-80 text-slate-700">
							<div className=" m-1 p-1 text-xl font-sans font-semibold">{item?.name}</div>
							<div className=" flex justify-between m-1 p-1">
								<span className=" text-md text-left font-medium h-2 px-2">Price per plate :₹{item.price/100}</span>
								<button className=" bg-blue-300 text-blue-600 shadow-blue-400 border-blue-500 rounded-lg border shadow-md font-mono px-2 hover:bg-green-400 hover:text-gray-500 hover:shadow-green-500 hover:border-green-600">Add</button>
							</div>
						</span>
						<img className=" h-24 w-32 rounded-md" src={IMG_CDN_URL+ ((!item.cloudinaryImageId)? image
: item.cloudinaryImageId)} />
					</div>
				))}
			</div>
		</div>
	))
}

export default MenuItems;