import { Col, Row, Card, Progress, Tooltip, Statistic, Button } from "antd";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
import { UpOutlined } from "@ant-design/icons";

function TradeCount() {
  const [count, setCount] = useState(52);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the count by 1 (you can adjust this as needed)
      setCount((prevCount) => prevCount + 1);
    }, 2000); // Update the count every 1000ms (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CountUp prefix="$" suffix="+" style={{ fontSize: "25px" }} end={count} />
    </div>
  );
}

const formatter = (value) => <CountUp end={value} separator="," />;
const ActiveUsers = () => {
  return (
    <Card title="Users & Share" hoverable>
      <Row gutter={[8, 4]}>
        <Col xs={24} md={12}>
          <Statistic
            title="Active Users"
            value={`112893`}
            formatter={formatter}
            suffix="+"
          />
          <p style={{ color: "#52C41A" }}>
            Share Value
            <UpOutlined />
          </p>
          <TradeCount />
          <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p>
          <Button style={{ margin: "3px" }}>Know More</Button>
        </Col>
        <Col xs={24} md={12}>
          <p>Today Sensex</p>
          <Progress percent={25} style={{ width: "45%" }} strokeColor={"red"} />
          <p>Today Nifty</p>
          <Progress
            percent={22}
            style={{ width: "65%" }}
            strokeColor={"orange"}
          />
          <p>Share Percent</p>
          <Progress percent={32} style={{ width: "75%" }} />
          <p>Overall Performence</p>
          <Progress percent={62} strokeColor={"red"} style={{ width: "85%" }} />
        </Col>
      </Row>
    </Card>
  );
};

export default ActiveUsers;
