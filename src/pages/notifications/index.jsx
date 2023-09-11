import { Col, Row } from "antd";
import Notifies from "./Notifies";

const Notifications = () => {
  return (
    <Row gutter={[8, 4]}>
      <Col xs={24}>
        <Notifies />
      </Col>
    </Row>
  );
};

export default Notifications;
