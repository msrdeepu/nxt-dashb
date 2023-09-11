import React from "react";
import "../../app/globals.css";
import { Col, Row, Form, Input, Button } from "antd";
const { TextArea } = Input;

const Leads = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-orange-500">Send Email</h1>
      <div className="h-[80vh] w-[100%] flex justify-center items-center">
        <Form layout="vertical" title="Send Email" className="w-[70%]">
          <Row gutter={[8, 4]}>
            <Col xs={24}>
              <Form.Item label="Email ID" name="mailid">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Email Address" name="mailaddress">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Your Message" name="message">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={5}>
              <Form.Item>
                <Button size="large">Send</Button>
              </Form.Item>
            </Col>
            <Col xs={5}>
              <Form.Item>
                <Button size="large" type="primary" danger>
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Leads;
