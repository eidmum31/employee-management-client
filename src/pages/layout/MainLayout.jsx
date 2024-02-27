import React from "react";
import Hero from "../shared/Hero";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    //desigingn the layout of the entire page
    <div className="">
      <Hero></Hero>
      {/* {sending the outlet as children to the drawer} */}
      <Header>
        <Outlet></Outlet> 
      </Header>
    </div>
  );
};

export default MainLayout;
