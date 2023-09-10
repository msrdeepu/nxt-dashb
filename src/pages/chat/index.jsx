import "./chat.css";
//antd imports
import { PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row, Card, Drawer, Button } from "antd";

//mui imports
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import SendIcon from "@mui/icons-material/Send";
import MmsIcon from "@mui/icons-material/Mms";

let Display = () => {
  console.log("hello chat btn");
};
//logo
import Logo from "../../../public/imgs/gptlogo.png";

const Chat = () => {
  return (
    <>
      <Row>
        {/* <Col className="left-container" xs={6}>
          <div className="upperSide">
            <div className="upperSideTop">
              <img src="" alt="" className="logo" />
              <span className="brand">DeepGPT</span>
            </div>
            <Button
              size="large"
              style={{ backgroundColor: "#00A67E" }}
              type="primary"
              className="newChat midbutton"
              icon={<PlusCircleOutlined />}
            >
              New Chat
            </Button>
            <div className="upperSideBottom">
              <Button className="query" icon={<MmsIcon />}>
                What is Programming ?
              </Button>
              <Button className="query" icon={<MmsIcon />}>
                What is Programming ?
              </Button>
            </div>
          </div>
          <div className="lowerSide"></div>
        </Col> */}

        <Col xs={24}>
          <div className="main-container">
            <div className="logo-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png"
                  alt="logo"
                  className="logo"
                />
                <span className="brand">SandeepGPT</span>
              </div>
              <div>
                <Button
                  style={{ backgroundColor: "#1976D2" }}
                  icon={<PlusCircleOutlined />}
                  type="primary"
                >
                  New Chat
                </Button>
              </div>
            </div>

            <div>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 600,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Send a message"
                  inputProps={{ "aria-label": "search google maps" }}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <SendIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
