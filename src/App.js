import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
// import RestaurantMenu from './components/RestaurantMenu';
import ProfileClassCompo from "./components/ProfileClassCompo";
import { Shimmer } from "react-shimmer";
import Cart from "./components/Cart";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const LoginForm = lazy(() => import("./components/LoginForm"));

const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClassCompo />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense
            fallback={
              <Shimmer className=" m-20 border-2" width={800} height={600} />
            }
          >
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
		errorElement: <Error/>,
    element: (
      <Suspense>
        <LoginForm />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
