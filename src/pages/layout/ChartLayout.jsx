import React from "react";
import DepartmentChart from "../Charts/DepartmentChart";
import PositionChart from "../Charts/PositionChart";
import EmploymentStatus from "../Charts/EmploymentStatus";
import Salary from "../Charts/Salary";

const ChartLayout = () => {
  return (
    <div style={{height:"500px",width:"100%"}}>
      
        <DepartmentChart></DepartmentChart>
        <PositionChart></PositionChart>
      
      
        <EmploymentStatus></EmploymentStatus>
        <Salary></Salary>
      
      
      
    </div>
  );
};

export default ChartLayout;
