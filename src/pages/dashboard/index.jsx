import { Card, Divider } from "antd";
import Tasks from "./Tasks";
import Planner from "./Planner";
import { Col, Row } from "antd";

//components
import ClockItem from "./ClockItem";
import Quote from "./Quote";
import Animation from "./Animation";

const index = () => {
  return (
    <div>
      <h2 className="text-2xl m-2 p-2 text-red-500">Essentials</h2>
      <Row gutter={[8, 4]}>
        <Col xs={24} md={8}>
          <ClockItem />
        </Col>
        <Col xs={24} md={8}>
          <Quote quote="WHY FOLLOW WHEN YOU CAN LEAD" />
        </Col>
        <Col xs={24} md={8}>
          <ClockItem />
        </Col>
        <Col xs={24}>
          <Animation />
        </Col>
      </Row>
      <Tasks />
      <Planner />
    </div>
  );
};

export default index;
