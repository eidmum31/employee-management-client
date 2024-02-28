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

const EmploymentStatus = () => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/employees`)
      .then((res) => res.json())
      .then((data) => {
        const statusCounts = {};
        data.forEach((employee, index) => {
          const status = employee.status;
          if (statusCounts[status]) {
            statusCounts[status]++;
          } else {
            statusCounts[status] = 1;
          }
        });
        const data1 = Object.keys(statusCounts).map((status) => ({
          status,
          count: statusCounts[status],
        }));
        setStatus(data1);
      });
  }, []);
  return (
    <ResponsiveContainer
      className="border-4 border-black mt-5 mb-[120px]"
      width="100%"
      height="100%"
    >
      <BarChart
        width={500}
        height={300}
        data={status}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
      <h1 className="text-center text-xl font-semibold mt-3">
         Employment Status Analysis
      </h1>
    </ResponsiveContainer>
  );
};

export default EmploymentStatus;
