import React, { useEffect, useState } from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";



const DepartmentChart = () => {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/employees`)
      .then((res) => res.json())
      .then((data) => {
        const departmentCounts = {};
        data.forEach((employee, index) => {
          const department = employee.department; 
          if (departmentCounts[department]) {
            departmentCounts[department]++;
          } else {
            departmentCounts[department] = 1;
          }
        });
        const data1 = Object.keys(departmentCounts).map(department => ({
            department,
            count: departmentCounts[department],
          }));
          setDepartment(data1);
        
      });
  }, []);

  return (
    <ResponsiveContainer style={{boxShadow:"0 0 10px"}} className="border-4 border-black mt-5 mb-[120px]" width="100%" height="100%">
      
     <BarChart
        width={500}
        height={300}
        data={department}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50, // Increase bottom margin to accommodate the X-axis label
        }}
        
      >
        <CartesianGrid  strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
      <h1  className="text-center mt-3 text-xl font-semibold">Employee Positions Analysis</h1>
    </ResponsiveContainer>
  );
};

export default DepartmentChart;
