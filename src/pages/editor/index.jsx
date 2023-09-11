import React from "react";
import Cards from "./Cards";
import { Row, Col, Card } from "antd";

const Editor = () => {
  return (
    <Row gutter={[8, 4]}>
      <Col xs={24}>
        {" "}
        <Cards />
      </Col>
      <Col xs={24}></Col>
    </Row>
  );
};

export default Editor;
