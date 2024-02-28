import React, { PureComponent, useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const Salary = () => {
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };
    const [salary,setSalary]=useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/employees`)
          .then((res) => res.json())
          .then((data) => {
            const salaries=data.map(salary=>parseFloat(salary.salary));
            salaries.sort((a,b)=>a-b);
            console.log(salaries);
            let start=salaries[0];
            
            const range=5000;
            const mainData={};                
            let end=start+range;                   //converting distinct salary into range
            for(let i=0;i<salaries.length;){
                if(end-salaries[i]>=0){
                    mainData[`${start}-${end}`]=(mainData[`${start}-${end}`]||0)+1;
                    i++;
                }
                else{
                    start=end+1;
                    end=start+range-1;
                }

            }
            const color=[ '#8884d8','#83a6ed','#8dd1e1','#82ca9d','#a4de6c','#d0ed57','#ffc658']
            let colori=0;
            const salaryRange=Object.keys(mainData).map(x=>{
                const u={                                     //converting obj into arr
                    name:x+" TK",
                    salary:mainData[x],
                    fill: color[colori++%7],   //iterating between different colors
                };
                return u;
            }
           
            )
            
            setSalary(salaryRange);
            
          });
      }, []);
    return (
        <ResponsiveContainer className="border-4 mt-5 mb-[200px] border-black" width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={salary}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="salary"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
        <h1 className='text-xl font-semibold text-center mt-3'>Salary Range Analysis</h1>
      </ResponsiveContainer>
    );
};

export default Salary;