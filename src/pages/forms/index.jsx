import { useState } from "react";

//mui imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//custom css
import "./style.css";
//antd-imports
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

//message form submit
const info = () => {
  message.success("Form Submitted Succesfully", 5);
};
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const { TextArea } = Input;
const { RangePicker } = DatePicker;
import { UploadOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { duration } from "@mui/material";

const Forms = () => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  //upload button
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Watermark content={""} style={{ height: "auto" }}>
      <Typography
        sx={{ textAlign: "center", padding: "10px", color: "#1976D2" }}
        variant="h4"
        component={"h1"}
      >
        FORMS
      </Typography>
      <Row gutter={[8, 4]}>
        <Col xs={24}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">Details Form</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Form layout="vertical" form={form}>
                <Row gutter={[8, 4]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="First Name"
                      name="firstname"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter First Name",
                        },
                      ]}
                    >
                      <Input type="text" placeholder="Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="lastname"
                      label="Last Name"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Last Name",
                        },
                      ]}
                    >
                      <Input type="text" placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Locality">
                      <Input type="text" placeholder="Locality" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Pin Code">
                      <Input type="text" placeholder="Postal Pin" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Your Email",
                        },
                      ]}
                    >
                      <Input type="email" placeholder="Enter Your Email" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Phone Number",
                        },
                      ]}
                    >
                      <Input type="number" placeholder="Phone Number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={6}>
                    <Form.Item label="Date of Birth">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={6}>
                    <Form.Item label="SSC">
                      <RangePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={6}>
                    <Form.Item label="Intermediate">
                      <RangePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={6}>
                    <Form.Item label="Graduation">
                      <RangePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Resume">
                      <Upload style={{ width: "100%" }}>
                        <Button icon={<UploadOutlined />}>Upload Here</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Images">
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-circle"
                        onPreview={handlePreview}
                        onChange={handleChange}
                      >
                        {uploadButton}
                      </Upload>
                      <Modal
                        open={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                      >
                        <img
                          alt="example"
                          style={{
                            width: "100%",
                          }}
                          src={previewImage}
                        />
                      </Modal>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Bank Account Number">
                      <Input type="number" placeholder="Bank Account Number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Bank Account IFSC Number">
                      <Input type="text" placeholder="IFSC Number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Current Address">
                      <TextArea rows={4} placeholder="Current Address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Perminant Address">
                      <TextArea rows={4} placeholder="Perminant Address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item label="Your Message">
                      <TextArea rows={4} placeholder="Your Message" />
                    </Form.Item>
                  </Col>
                </Row>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={info}
                    htmlType="submit"
                    style={{
                      margin: "8px",
                      backgroundColor: "orange",
                      color: "white",
                      width: "15%",
                    }}
                    type="primary"
                  >
                    Submit
                  </Button>
                  <Button
                    style={{
                      margin: "8px",
                      width: "15%",
                    }}
                    danger
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </AccordionDetails>
          </Accordion>
        </Col>
      </Row>

      <Row gutter={[8, 4]}>
        <Col xs={24}>
          <Accordion style={{ marginTop: "10vh" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="second-form"
              id="second-form"
            >
              <Typography variant="h5">Registration Form</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="register-form-container">
                <div className="container-one">demo1</div>
                <div className="container-two">demo2</div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Col>
      </Row>

      <Row gutter={[8, 4]}>
        <Col xs={24}>
          <Accordion style={{ marginTop: "10vh" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="third-form"
              id="third-form"
            >
              <Typography variant="h5">Login Form</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="register-form-container-two">
                <div className="container-one-two">demo1</div>
                <div className="container-two-two">demo2</div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Col>
      </Row>
    </Watermark>
  );
};

export default Forms;
