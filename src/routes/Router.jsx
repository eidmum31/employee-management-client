import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Header from "../pages/shared/Header";
import MainLayout from "../pages/layout/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);
export default router;