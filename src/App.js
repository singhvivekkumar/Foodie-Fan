import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const Applayout = () => {
	return (
		<React.Fragment>
			<Header/>
			<Outlet/> 
			<Footer/>
		</React.Fragment>
	);
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Applayout/>,
		errorElement: <Error/>,
		children: [
			{
				path: "/",
				element: <Body/>
			},
			{
				path: "/about",
				element: <About/>
			},
			{
				path: "/contact",
				element: <Contact/>
			},
			{
				path: "/card",
				element: <About/>
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu/>
			}
		]
	},
	
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);