import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Header from "../pages/shared/Header";
import MainLayout from "../pages/layout/MainLayout";
import NewEmployee from "../pages/NewEmployee/NewEmployee";
import AllEmployee from "../pages/AllEmployee/AllEmployee";
import EditEmployee from "../pages/EditEmployee/EditEmployee";



const router = createBrowserRouter([
  {
    path: "/employees",
    element: <MainLayout></MainLayout>,//common layout for all
    children:[
        {
            path:'/employees/newEmployee',
            element:<NewEmployee></NewEmployee> //employee form page
        },
        {
          path:'/employees/allEmployees',
          element:<AllEmployee></AllEmployee>,

        }
        ,
        {
          path:'/employees/:id',
          element:<EditEmployee></EditEmployee>
        }
    ]
  },
]);
export default router;