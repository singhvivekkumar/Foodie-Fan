import logo from "../assets/swiggy-logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className=" h-14 p-2 m-3 " alt="logo" src={logo} />
  </a>
);

function Header() {
  return (
    <header className="flex justify-between ">
      <Title />

      <div className="">
        <ul className=" flex py-8">
          <li className=" px-2 ">Home </li>
          <li className=" px-2 ">About</li>
          <li className=" px-2 ">Contact</li>
          <li className=" px-2 ">Help</li>
        </ul>
      </div>
      <div className="">cart</div>
    </header>
  );
};

export default Header;
