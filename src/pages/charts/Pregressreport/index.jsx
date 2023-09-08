import { Col, Row, Card, Progress, Tooltip, Button } from "antd";

const Progressreport = () => {
  return (
    <Card title="Progress" hoverable>
      <Row gutter={[8, 4]}>
        <Col xs={24} style={{ textAlign: "center" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsam molestias odio aliquam.
          </p>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Tooltip title="66% Completed" color="purple">
            <Progress
              status="active"
              trailColor="orange"
              percent={66}
              type="dashboard"
            />
          </Tooltip>
        </Col>

        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Tooltip title="62% Completed" color="orange">
            <Progress
              status="active"
              percent={62}
              strokeColor={"red"}
              type="dashboard"
              trailColor="purple"
            />
          </Tooltip>
        </Col>

        <Col xs={24} style={{ textAlign: "center" }}>
          <Button type="primary" danger>
            Know More
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Progressreport;
