import logo from "../assets/swiggy-logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="#">
    <img className=" h-14 p-2 m-3 " alt="logo" src={logo} />
  </a>
);

function Header() { 
  return (
    <header>
      <Title/>
	
      <div className="">
		<ul>
			<li>Home </li>
			<li>About</li>
			<li>Contact</li>
			<li>Help</li>
		</ul>
	  </div>
    </header>
  );
};

export default Header;
