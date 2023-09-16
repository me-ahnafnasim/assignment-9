import React, { useEffect, useState } from 'react';
import axios from 'axios'
//import { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";




const Statistics = () => {
    const [chart, setChart] = useState ({})
    useEffect(()=>{
//     const fetchData= async()=>{
//         const {data}= await axios.get('https://openapi.programming-hero.com/api/quiz')
//         console.log(data)
//     }
//     fetchData()
    axios.get('https://openapi.programming-hero.com/api/quiz')
   .then(data=>{
    const final = data.data.data;
    const singleInfo = final.map( data=> {
        const single ={
            id: data.id,
            total: data.total,
        }
        return single
    })
    //console.log(last)
    setChart(singleInfo)
   })
    
   },[])


    return (
        <div className='flex justify-center '>
            <LineChart
        width={600}
        height={500}
        data={chart}
        margin={{
          top: 90,
          right: 20,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="id"
          stroke="#8884d8"
        //   dot={<CustomizedDot />}
        />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart> 
        </div>
       
    );
};

export default Statistics;




