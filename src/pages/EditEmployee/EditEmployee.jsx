import React from 'react';

const EditEmployee = () => {

    // Edit existing employee
    return (
        <div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[10px]">
          <h1 className="text-center text-3xl pt-4 font-semibold">
            Employee details
          </h1>
          <form  className="card-body">
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">ADD Employee</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditEmployee;