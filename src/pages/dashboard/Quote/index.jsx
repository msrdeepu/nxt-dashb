import "./quote.css";
import { Card } from "antd";
const Quote = (props) => {
  return (
    <Card
      hoverable
      className="quote-card text-3xl flex flex-row justify-center items-center text-center text-white"
    >
      <p className="text-white">Quote</p>
      {props.quote}
    </Card>
  );
};

export default Quote;
