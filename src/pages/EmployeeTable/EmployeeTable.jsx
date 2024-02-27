import React from "react";

const EmployeeTable = ({ employee, indx,deleteEmployee }) => {
  const {_id, img, name, department, position, salary } = employee;
  return (
    <tr>
      <th>{indx + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{department.toUpperCase()}</td>
      <td>{position.toUpperCase()}</td>
      <td>{`BDT ` + salary}</td>
      <th>
        <button onClick={()=>deleteEmployee(_id)}  className="btn btn-circle btn-outline me-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
      </th>
      <th><button className="btn btn-outline btn-secondary">Edit</button></th>
    </tr>
  );
};

export default EmployeeTable;