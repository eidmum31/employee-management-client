import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaRegUser } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { FaChartBar } from "react-icons/fa";
const Header = ({children}) => {
  return (
    //sidebar options
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
      

        <label
          htmlFor="my-drawer-2"
          className="btn btn-block drawer-button lg:hidden"
        >
          View Options
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <Link to={'/allEmployees'}  style={{boxShadow:"0 0 5px"}} className="flex font-semibold mb-3 p-2 rounded hover:bg-slate-300"><FaRegUser className="me-2 text-2xl" /> <span className="text-xl">Manage Employees</span></Link>
          <Link to={'/newEmployee'} style={{boxShadow:"0 0 5px"}}  className="flex font-semibold mb-3 p-2 rounded hover:bg-slate-300"><GrAdd   className="me-2 text-2xl" /> <span className="text-xl">New Employee</span></Link>
          <Link style={{boxShadow:"0 0 5px"}}  className="flex font-semibold p-2 rounded hover:bg-slate-300"><FaChartBar  className="me-2 text-2xl" /> <span className="text-xl">Analytics Dashboard</span></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
