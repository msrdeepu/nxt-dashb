import { Row, Col, Card } from "antd";
import "../../../app/globals.css";
import dataOne from "../../../../public/assets/dataOne.json";
import dataTwo from "../../../../public/assets/dataTwo.json";
import dataThree from "../../../../public/assets/dataThree.json";

import Lottie from "lottie-react";

const Animation = () => {
  return (
    <Row gutter={[8, 4]}>
      <Col xs={24} md={8}>
        <Card
          title="Manage Everything From Here"
          hoverable
          style={{ height: "auto", margin: "4px" }}
        >
          <Lottie
            style={{
              height: 400,
              width: "auto",
              resizeMode: "contain",
            }}
            animationData={dataOne}
          />
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card
          title="Organize the Data"
          hoverable
          style={{ height: "auto", margin: "4px" }}
        >
          <Lottie
            style={{
              height: 400,
              width: "auto",
              resizeMode: "contain",
            }}
            animationData={dataTwo}
          />
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card
          title="Get Amazing User Experience"
          hoverable
          style={{ height: "auto", margin: "4px" }}
        >
          <Lottie
            style={{
              height: 400,
              width: "auto",
              resizeMode: "contain",
            }}
            animationData={dataThree}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Animation;
