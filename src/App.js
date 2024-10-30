import React, { lazy, Suspense, useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import HeaderComponent from "./component/Header";
import LoadingError from "./component/LoadingError";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import RestaurantInformation from "./component/RestaurantInformation";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./component/Body";
import store from "./redux/store";

const AppComponent = () => {
  const [username, setUserName] = useState();

  useEffect(() => {
    setUserName("Laxman Mali");
  }, []);

  return (
    <Provider store={store}>
      <div>
        <UserContext.Provider value={{ loginUser: username, setUserName }}>
          <HeaderComponent /> <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const Cart = lazy(() => import("./component/CartComponent"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1> LAxman </h1>}>
            {" "}
            <Cart></Cart>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInformation />,
      },
    ],
    errorElement: <LoadingError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
