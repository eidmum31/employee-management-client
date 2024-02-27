import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const NewEmployee = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChang = async (e) => {
    try {
      const file = e.target.files[0];

      setImageFile(file);
      console.log(file);
    } catch (err) {
      console.log(err);
    }
  };
  const addEmployee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dob = form.dob.value;
    const position = form.position.value;
    const department = form.department.value;
    const status = form.status.value;
    const salary = form.salary.value;
    const number = form.number.value;

    
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=365c9a7650645f5a50934f48e19ecc3e",
        formData
      );
      const uploadedImageUrl = response.data.data.url;

      console.log("Image uploaded successfully. URL:", uploadedImageUrl);
      const data = {
        img: uploadedImageUrl,
        name,
        dob,
        position:position.toLowerCase(),
        department:department.toLowerCase(),
        status:status.toLowerCase(),
        salary,
        number,
      };
      axios.post("http://127.0.0.1:5000/employees",data)
      .then(res=>{
        if(res.data)
          {
            Swal.fire({
              title: "Good job!",
              text: "New Employee Added!",
              icon: "success"
            });
          }
      })
    
       
    } catch (error) {
      Swal.fire({
        title: "error!",
        text: "Product add failed!",
        icon: "error",
      });
    }
    
  };
  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[10px]">
        <h1 className="text-center text-3xl pt-4 font-semibold">
          Employee details
        </h1>
        <form onSubmit={addEmployee} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="file"
              placeholder="Upload a image"
              onChange={handleImageChang}
              className="file-input file-input-bordered w-full max-w-xs"
              name="image"
              //   onChange={handleImageChang}
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

export default NewEmployee;
