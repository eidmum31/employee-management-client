import React from 'react';
import { BiSolidBookOpen } from "react-icons/bi";
const Hero = () => {
    return (

        //Name of the topbar
        <div style={{boxShadow:"0 0 10px"}} className='text-4xl p-7 flex justify-center' >
            <BiSolidBookOpen className='my-auto text-5xl me-2' />
            <h1  > Employee Management System</h1>
        </div>
    );
};

export default Hero;