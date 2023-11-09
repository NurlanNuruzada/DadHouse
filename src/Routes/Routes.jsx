import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Restaurant from "../Pages/Restaurant/Restaurant";
import RoomSutuies from "../Pages/RoomSutuies/RoomSutuies";

export default function Routes() {
  let routes = [
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Restaurant",
          element: <Restaurant />,
        },
        {
          path: "/RoomSutuies",
          element: <RoomSutuies />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}
