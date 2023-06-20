import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";

const Cart = () => {

  const cartItems = useSelector( (store) => store.cart.items);

  return (
    !cartItems? <div>not add till now</div> :<div className=" flex ">
      <div className=" text-4xl font-sans font-semibold p-2 m-2" >Cart Information</div>
      <div>
        {
          cartItems.map( (item) => {
            console.log(item.name);
            return(<div className=" bg-slate-100 flex justify-between drop-shadow-md shadow-md border m-6 p-2 px-2 hover:shadow-orange-300 hover:bg-orange-100 hover:border-orange-200" key={item.id}>		
						<span className=" flex flex-col w-80 text-slate-700">
							<div className=" m-1 p-1 text-xl font-sans font-semibold">{item?.name}</div>
							<div className=" flex justify-between m-1 p-1">
								<span className=" text-md text-left font-medium h-2 px-2">Price per plate :₹{item.price/100}</span>
								<button className=" bg-blue-300 text-blue-600 shadow-blue-400 border-blue-500 rounded-lg border shadow-md font-mono px-2 hover:bg-green-400 hover:text-gray-500 hover:shadow-green-500 hover:border-green-600">Remove</button>
							</div>
						</span>
						<img className=" h-24 w-32 rounded-md" src= {IMG_CDN_URL + item.cloudinaryImageId} />
					</div>)
          })
        }
      </div>
    </div>
  );
};

export default Cart;
