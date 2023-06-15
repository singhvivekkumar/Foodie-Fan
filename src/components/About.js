import { Outlet } from "react-router-dom";
import ProfileClassCompo from "./ProfileClassCompo";

const About = () => {
	return (
		<div className=" flex justify-center text-lg font-serif font-bold">
			<h1> This is About section </h1>
			<div>
				<ProfileClassCompo name={"Vivek Kumar "} registration={19105128049} />
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
}

export default About;