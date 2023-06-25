import { useState } from "react";
import logo from "../assets/logodelivery.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { toggleLogin } from "../utils/overlaySlice";

const Title = () => (
  <Link to="/">
    <img data-testid="logo" className=" h-16 p-2 m-2  " alt="logo" src={logo} />
  </Link>
);

function Header() {
  
  const cartItem = useSelector((store) => store.cart.items)

  const dispatch =useDispatch();
  const handleLoginPage = () => {
    dispatch(toggleLogin());
  }
  
  return (
    <header className="flex justify-around pt-2 bg-slate-200 px-12">
      <div>
        <Title />
      </div>

      <div className=" font-serif font-bold text-gray-700 text-xl ">
        <ul className=" py-8 ">
          <Link to="/">
            <li className=" hover:text-orange-400 px-4 fa fa-home "> Home </li>
          </Link>
          <Link to="/about">
            <li className=" hover:text-orange-400 px-4 fa fa-user "> About</li>
          </Link>
          <Link to="/contact">
            <li className=" hover:text-orange-400 px-4 fa fa-phone">
              {" "}
              Contact
            </li>
          </Link>
        </ul>
      </div>

      <Link
        to="/cart"
        className="  text-2xl text-center cursor-pointer my-4 py-3"
      >
        <i data-testid="cartTest" className=" fa fa-shopping-cart hover:text-orange-400"> cart - {cartItem.length}</i>
        {/* <span> cart</span> */}
      </Link>

      <Link className=" text-2xl">
        <button
          onClick={() => {handleLoginPage}}
          className=" my-4 py-4  fa fa-user-circle-o hover:text-orange-400"
        >
        </button>
      </Link>
    </header>
  );
}

export default Header;
