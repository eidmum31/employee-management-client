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

const PositionChart = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetch(`https://worried-sweatsuit-bat.cyclic.app/employees`)
      .then((res) => res.json())
      .then((data) => {
        const positionsCounts = {};
        data.forEach((employee, index) => {
          const positions = employee.position;
          if (positionsCounts[positions]) {
            positionsCounts[positions]++;
          } else {
            positionsCounts[positions] = 1;
          }
        });
        const data1 = Object.keys(positionsCounts).map((positions) => ({
          positions,
          count: positionsCounts[positions],
        }));
        setPositions(data1);
        console.log(data1);
      });
  }, []);

  return (
    <ResponsiveContainer style={{boxShadow:"0 0 10px"}} className="border-4 border-black mt-5 mb-[120px]" width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={positions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="positions" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
      <h1  className="text-center text-xl font-semibold mt-3">Employee Department Analysis</h1>
    </ResponsiveContainer>
  );
};

export default PositionChart;
