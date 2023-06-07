import { Outlet } from "react-router-dom";
import ProfileComponent from "./ProfileComponent"


const About = () => {
	return (
		<div>
			<h1> This is About section </h1>
			<Outlet/>
			<ProfileComponent/>
		</div>
	);
}

export default About;