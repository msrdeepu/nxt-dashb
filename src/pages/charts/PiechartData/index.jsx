import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "antd";

const data = [
  {
    name: "USA",
    Bookings: 4000,
    Sales: 2400,
    amt: 2400,
  },
  {
    name: "INDIA",
    Bookings: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: "GERMANY",
    Bookings: 2000,
    Sales: 9800,
    amt: 2290,
  },
  {
    name: "JAPAN",
    Bookings: 2780,
    Sales: 3908,
    amt: 2000,
  },
];

export default class Example extends PureComponent {
  state = {
    opacity: {
      Bookings: 1,
      Sales: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <Card title="Sales Line Data" hoverable>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={300}
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
            <Legend
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
            <Line
              type="monotone"
              dataKey="Sales"
              strokeOpacity={opacity.Sales}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Bookings"
              strokeOpacity={opacity.Bookings}
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}
