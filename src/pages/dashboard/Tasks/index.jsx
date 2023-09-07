import { useEffect } from "react";
import "./tasks.css";
import "../../../app/globals.css";
//live
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
//antd
import {
  Card,
  Col,
  Row,
  Avatar,
  Button,
  Tooltip,
  Progress,
  App,
  notification,
  Space,
} from "antd";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import { duration } from "@mui/material";
const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};

const Planner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.success({
      message: `Task Assigned Succesfully`,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam exercitationem rerum.",
      placement,
    });
  };
  return (
    <div>
      <h2 className="text-2xl m-2 p-2 text-red-500">Quick Tasks</h2>
      <Row gutter={[8, 4]}>
        <Col xs={24} md={8}>
          <Card title="Task One" className="" hoverable data-aos="fade-left">
            <p>Yesterday Progress</p>
            <Progress percent={50} status="active" />
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              veniam cumque aut nihil! Ut, quisquam! Eos assumenda, autem culpa
              harum nihil eaque itaque, repudiandae est magni consequatur quos
              sequi doloremque.
            </h5>
            <div className="flex justify-between items-center p-4">
              <Avatar.Group maxPopoverTrigger="hover">
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
                <Avatar src="https://e0.pxfuel.com/wallpapers/320/892/desktop-wallpaper-ben-10-logos-ben-10-omnitrix.jpg" />
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
              </Avatar.Group>
              {contextHolder}
              <Button
                type="primary"
                onClick={() => openNotification("bottomRight")}
                className="bg-blue-500"
              >
                Assign To Team
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Task Two" className="" hoverable data-aos="fade-right">
            <p>Yesterday Progress</p>
            <Progress percent={75} strokeColor={"purple"} status="active" />
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              veniam cumque aut nihil! Ut, quisquam! Eos assumenda, autem culpa
              harum nihil eaque itaque, repudiandae est magni consequatur quos
              sequi doloremque.
            </h5>
            <div className="flex justify-between items-center p-4">
              <Avatar.Group maxPopoverTrigger="hover">
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
                <Avatar src="https://e0.pxfuel.com/wallpapers/320/892/desktop-wallpaper-ben-10-logos-ben-10-omnitrix.jpg" />
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
              </Avatar.Group>
              <Button
                onClick={() => openNotification("bottom")}
                type="primary"
                className="bg-purple-500"
              >
                Assign To Team
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            title="Task Three"
            className=""
            hoverable
            data-aos-easing="ease-in-sine"
            data-aos="fade-left"
          >
            <p>Yesterday Progress</p>
            <Progress percent={82} strokeColor={"lightgreen"} status="active" />
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              veniam cumque aut nihil! Ut, quisquam! Eos assumenda, autem culpa
              harum nihil eaque itaque, repudiandae est magni consequatur quos
              sequi doloremque.
            </h5>
            <div className="flex justify-between items-center p-4">
              <Avatar.Group maxPopoverTrigger="hover">
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
                <Avatar src="https://e0.pxfuel.com/wallpapers/320/892/desktop-wallpaper-ben-10-logos-ben-10-omnitrix.jpg" />
                <Avatar src="https://wallpaperaccess.com/full/2362141.jpg" />
                <Avatar src="https://www.kindpng.com/picc/m/218-2181088_happy-walking-nobita-hifi-nobita-cartoon-png-transparent.png" />
                <Avatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/858c329eaf248bc53fbd9de8f384e0af79354eaeb29801890eb407419c44cfed._RI_TTW_.jpg" />
              </Avatar.Group>
              <Button
                type="primary"
                onClick={() => openNotification("bottomRight")}
                className="bg-orange-400"
              >
                Assign To Team
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
