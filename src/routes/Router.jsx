import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Header from "../pages/shared/Header";
import MainLayout from "../pages/layout/MainLayout";
import NewEmployee from "../pages/NewEmployee/NewEmployee";
import AllEmployee from "../pages/AllEmployee/AllEmployee";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,//common layout for all
    children:[
        {
            path:'/newEmployee',
            element:<NewEmployee></NewEmployee> //employee form page
        },
        {
          path:'/allEmployees',
          element:<AllEmployee></AllEmployee>,

        }
    ]
  },
]);
export default router;