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
      position: position.toLowerCase(),
      department: department.toLowerCase(),
      status: status.toLowerCase(),
      salary,
      number,
    };
    fetch(`http://127.0.0.1:5000/employees/${_id}`, {
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
            <input
              type="text"
              placeholder="Enter Employee Position"
              className="input input-bordered"
              name="position"
              defaultValue={position.toUpperCase()}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department</span>
            </label>
            <input
              type="text"
              placeholder="Enter Employee Department"
              className="input input-bordered"
              name="department"
              required
              defaultValue={department.toUpperCase()}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employment Status</span>
            </label>
            <input
              type="text"
              placeholder="Full-time/Intern/Remote"
              className="input input-bordered"
              name="status"
              defaultValue={status.toUpperCase()}
              required
            />
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
