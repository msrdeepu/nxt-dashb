import { Progress, Space, Card, Avatar } from "antd";
const { Meta } = Card;

//global css
import "../../../app/globals.css";

const SalesPercent = () => {
  return (
    <div>
      <Space
        wrap
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          hoverable
          style={{ width: 320 }}
          //   cover={}
        >
          <h1 className="text-center text-2xl">Mobiles</h1>
          <div className="text-center p-4">
            <Progress type="dashboard" percent={50} />
          </div>
          <Meta
            avatar={
              <Avatar src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          hoverable
          style={{ width: 320 }}
          //   cover={}
        >
          <h1 className="text-center text-2xl">Mobiles</h1>
          <div className="text-center p-4">
            <Progress type="dashboard" percent={75} strokeColor={"orange"} />
          </div>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          hoverable
          style={{ width: 320 }}
          //   cover={}
        >
          <h1 className="text-center text-2xl">Mobiles</h1>
          <div className="text-center p-4">
            <Progress type="dashboard" percent={100} />
          </div>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          hoverable
          style={{ width: 350 }}
          //   cover={}
        >
          <h1 className="text-center text-2xl">Mobiles</h1>
          <div className="text-center p-4">
            <Progress
              type="dashboard"
              percent={25}
              strokeLinecap="round"
              strokeColor={"red"}
            />
          </div>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Space>
    </div>
  );
};

export default SalesPercent;
