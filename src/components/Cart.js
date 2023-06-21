import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let listPrice = 0;

  return !cartItems ? (
    <div>not add till now</div>
  ) : (
    <div className=" flex flex-col items-center ms-32">
      <div className=" text-4xl font-serif text-orange-400 font-semibold p-2 m-2">
        Cart Information
      </div>
      <div className=" flex flex-row me-24">
        <span>
          {cartItems.map((item) => {
            console.log(item.name);
            listPrice = listPrice + item.price / 100;
            return (
              <div
                className=" bg-slate-100 flex justify-between drop-shadow-md shadow-md border m-6 p-2 px-2 hover:shadow-orange-300 hover:bg-orange-100 hover:border-orange-200"
                key={item.id + listPrice}
              >
                <span className=" flex flex-col w-80 text-slate-700">
                  <div className=" m-1 p-1 text-xl font-sans font-semibold">
                    {item?.name}
                  </div>
                  <div className=" flex justify-between m-1 p-1">
                    <span className=" text-md text-left font-medium h-2 px-2">
                      Price per plate :₹{item.price / 100}
                    </span>
                    <button className=" bg-blue-300 text-blue-600 shadow-blue-400 border-blue-500 rounded-lg border shadow-md font-mono px-2 hover:bg-red-400 hover:text-gray-500 hover:shadow-red-500 hover:border-red-600">
                      Remove
                    </button>
                  </div>
                </span>
                <img
                  className=" h-24 w-32 rounded-md"
                  src={IMG_CDN_URL + item.cloudinaryImageId}
                />
              </div>
            );
          })}
        </span>
        <span className=" text-lg m-10 ms-32">
          <div className=" text-2xl font-semibold text-center p-4 ">Cart Billing</div>
          <table className=" table-auto border border-separate border-slate-500 ">
            <thead>
              <tr>
                <th className="border  border-slate-500 p-2">Name of Item </th>
                <th className="border  border-slate-500 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id + listPrice}>
                    <td className=" border  border-slate-500 p-2 px-2 ">{item.name}</td>
                    <td className=" border  border-slate-500 p-2 text-right">₹ {item.price / 100}</td>
                  </tr>
                );
              })}
              <tr>
                <td className=" border  border-slate-500 p-2">Total Amount</td>
                <td className=" border  border-slate-500 p-2 text-right">₹ {listPrice}</td>
              </tr>
            </tbody>
          </table>
          <button className=" float-right mt-20 bg-blue-400 hover:bg-green-500 hover:shadow-lg hover:shadow-green-400 rounded-md p-1 "> Pay Now </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
