import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Chats',
    numberofchats: 50,
  },
  {
    name: 'Responses',
    numberofchats: 30,
  },
];

export default  function Graph({totalcount,sessionCount}) {
  const data = [
    {
      name: 'Chats',
      numberofchats: totalcount,
    },
    {
      name: 'Responses',
      numberofchats: totalcount/2,
    },
    {
      name: 'sessions',
      numberofchats: sessionCount,
    },
  ];
  return (
    <BarChart
      width={500}
      height={235}
      data={data}
      margin={{
        top: 0,
        right: 40,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip shared={false} trigger="click" />
      <Legend />
      <Bar dataKey="numberofchats" fill="#82ca9d" />
    </BarChart>
  );
}
