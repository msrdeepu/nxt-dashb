import { Card, Divider } from "antd";
import Tasks from "./Tasks";
import Planner from "./Planner";

const index = () => {
  return (
    <div>
      <Tasks />
      <Planner />
    </div>
  );
};

export default index;
