import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import Swal from "sweetalert2";

const AllEmployee = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/employees`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);
  const deleteEmployee = (_id) => {
    console.log("deleted", _id);
    fetch(`http://127.0.0.1:5000/employees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Employee deleted");
        }
      });
    const remaining = employee.filter((x) => x._id != _id);
    setEmployee([...remaining]);
  };
  return (
    
      <table className="table mt-0">
        
        {/* head */}
        <thead>
          <tr>
            <th>S.I</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((x, indx) => (
            <EmployeeTable
              deleteEmployee={deleteEmployee}
              indx={indx}
              key={x._id}
              employee={x}
            ></EmployeeTable>
          ))}
        </tbody>
        {/* foot */}
      </table>
    
  );
};

export default AllEmployee;
