import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* in order to use this header to all our pages like to  body, about us, contact us page, we need to pass those components to children */}
      {/* <Body /> */}
      
      {/* when the path is changed, the outlet will be filled with the children component mentioned in the config based on the path provided */}
      <Outlet /> 

    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {path: '/restaurant/:id', element: <RestaurantMenu />}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
