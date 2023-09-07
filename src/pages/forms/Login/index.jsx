import "./login.css";

//antd
import {
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  message,
  Upload,
  Modal,
  Col,
  Row,
  Watermark,
} from "antd";
//captcha
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
  console.log("Captcha value:", value);
}

const index = () => {
  return (
    <div className="login-container">
      <div className="img-container">
        <div className="login-text-container">
          <h1 className="login-here-text">LOGIN HERE</h1>
        </div>
      </div>
      <div className="form-container">
        <Form layout="vertical">
          <Row gutter={[8, 4]}>
            <Col xs={24}>
              <div className="avatar-container">
                <div className="form-avatar"></div>
              </div>
            </Col>
            <Col xs={24}>
              <Form.Item label="Email" name={"email"}>
                <Input type="text" placeholder="Enter Your Email" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Password" name={"password"}>
                <Input type="password" placeholder="Enter Your Password" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Password" name={"password"}>
                <ReCAPTCHA
                  theme="dark"
                  style={{ width: "100%" }}
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
                {/* Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe */}
              </Form.Item>
            </Col>
          </Row>
          <div className="btns-container">
            <Button type="primary" className="btn-item">
              Login
            </Button>
            <Button className="btn-item" danger>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default index;
