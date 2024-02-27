import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Header from "../pages/shared/Header";
import MainLayout from "../pages/layout/MainLayout";
import NewEmployee from "../pages/NewEmployee/NewEmployee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,//common layout for all
    children:[
        {
            path:'/employees',
            element:<NewEmployee></NewEmployee> //employee form page
        }
    ]
  },
]);
export default router;