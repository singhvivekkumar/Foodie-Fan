import { createContext } from "react";

const UserContext = createContext({
	name: "Name",
	email: "xyz@gmail.com"
});

//use for debugging the code 
UserContext.displayName = "UserContext";

export default UserContext;