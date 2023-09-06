import "./indexstyle.css";
import "../../app/globals.css";

//mui

//antd
import { Progress, Space } from "antd";

//components

const Charts = () => {
  return (
    <div className="grid-container">
      <div>Charts</div>
      <Space wrap>
        {" "}
        <Progress type="dashboard" percent={75} />
      </Space>
    </div>
  );
};

export default Charts;
