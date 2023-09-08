import Clock from "react-live-clock";
import { Card } from "antd";
import "../Quote/quote.css";

const ClockItem = () => {
  return (
    <Card
      hoverable
      style={{ color: "white", backgroundColor: "dodgerblue" }}
      className="text-center text-white text-bold time-card flex justify-center items-center text-3xl"
    >
      <Clock
        className="text-4xl"
        format={"HH:mm:ss"}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </Card>
  );
};

export default ClockItem;
