import React, { PureComponent } from "react";
import { Card } from "antd";
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
} from "recharts";

const data = [
  {
    name: "USA",
    Bookings: 4000,
    Sales: 2400,
    amt: 2400,
  },
  {
    name: "CANADA",
    Bookings: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: "INDIA",
    Bookings: 2000,
    Sales: 9800,
    amt: 2290,
  },
  {
    name: "GERMANY",
    Bookings: 2780,
    Sales: 3908,
    amt: 2000,
  },
  {
    name: "FRANCE",
    Bookings: 1890,
    Sales: 4800,
    amt: 2181,
  },
  {
    name: "RUSSIA",
    Bookings: 2390,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: "JAPAN",
    Bookings: 3490,
    Sales: 4300,
    amt: 2100,
  },
];

function BarChartItem() {
  return (
    <Card title="Country wise Sales Bar Chart Data" hoverable>
      <BarChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" />
        <Bar dataKey="Bookings" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
}
export default BarChartItem;
