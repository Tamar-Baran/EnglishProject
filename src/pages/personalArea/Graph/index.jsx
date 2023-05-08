import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,   
//   },
//   {
//     name: 'Page B',
//     uv: 3000,  
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,},
// ];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function AverageGraph() {
  const [mapData, setMapData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [grade, setGrade] = useState([]);
  useEffect(() => {
    async function fetchData() {

      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      }
      const { data } = await axios.get(`http://localhost:3600/api/achievements/graph`, config)
console.log(data)
let sortedData = data.sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()));
console.log(sortedData)
var localDate=[]
var localGrade=[]
var averageGrade=[]
var tmp=[]
var index;
sortedData.map((index)=>{
localDate.push(index.date) 
localGrade.push(index.grade) 
console.log(localDate, "localDate")
console.log(localGrade, "localGrade")

tmp[0]=localGrade[0];
var i;
averageGrade[0]=localGrade[0];
let count=2;
for(i=1;i<localGrade.length; i++)
{
  tmp[i]=tmp[i-1]+localGrade[i];
  console.log(tmp[i])
  averageGrade[i]=((tmp[i])/(count));
  
  console.log(count,i, averageGrade[i])
  count=count+1;

}
setNewData(averageGrade.map((grade,index)=> {return{'uv':grade,'name':localDate[index]}})) 
})

    }

    fetchData();
  }, []);
  return (
    <BarChart
      width={500}
      height={300}
      data={newData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis style={{fontSize:'10'}} dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {console.log(newData)}
        {newData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

AverageGraph.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
