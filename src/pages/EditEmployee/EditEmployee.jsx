import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditEmployee = () => {
  const {
    image,
    _id,
    name,
    position,
    department,
    salary,
    dob,
    number,
    status,
  } = useLoaderData();
  const updateEmployee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dob = form.dob.value;
    const position = form.position.value;
    const department = form.department.value;
    const status = form.status.value;
    const salary = form.salary.value;
    const number = form.number.value;

    const data = {
      name,
      dob,
      position: position,
      department: department,
      status: status,
      salary,
      number,
    };
    fetch(`https://worried-sweatsuit-bat.cyclic.app/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Employee Updated");
        } else {
          Swal.fire("Employee can not be updated");
        }
      });
  };
  // Edit existing employee
  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[10px]">
        <h1 className="text-center text-3xl pt-4 font-semibold">
          Employee details
        </h1>
        <form onSubmit={updateEmployee} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="file"
              placeholder="Upload a image"
              className="file-input file-input-bordered w-full max-w-xs"
              name="image"
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="input input-bordered"
              name="name"
              required
              defaultValue={name}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              placeholder="Enter Date of Birth"
              className="input input-bordered"
              name="dob"
              defaultValue={dob}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <select name="position" defaultValue={position} className="select select-bordered w-full max-w-xs">
              <option disabled>
                Pick from the options
              </option>
              <option>Front-end Developer</option>
              <option>Back-end Developer</option>
              <option>Database Administrator</option>
              <option>Project Manager</option>
              <option>Chief Executive Officer (CEO)</option>
              <option>Financial Analyst</option>
              <option>Finance Manager</option>
              <option>Marketing Manager</option>
              <option>Market Research Analyst</option>
              <option>HR Coordinator</option>
              <option>HR Manager</option>
              <option>Sales Manager</option>
              <option>Sales Support Specialist</option>
              <option>Sales Representative</option>

              
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department</span>
            </label>
            <select name="department" defaultValue={department} className="select select-bordered w-full max-w-xs">
              <option disabled >
                Pick from the options
              </option>
              <option>IT</option>
              <option>Management</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>HR</option>
              
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employment Status</span>
            </label>
            <select name="status" defaultValue={status} className="select select-bordered w-full max-w-xs">
              <option disabled >
                Pick from the options
              </option>
              <option>Full-Time</option>
              <option>Remote</option>
              <option>Intern</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="text"
              placeholder="Enter Salary"
              className="input input-bordered"
              name="salary"
              defaultValue={salary}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input input-bordered"
              name="number"
              defaultValue={number}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
