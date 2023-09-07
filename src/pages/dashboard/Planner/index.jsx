import "./planner.css";
//antd
import { Calendar, Col, Row, Badge } from "antd";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "Task",
        },
        {
          type: "success",
          content: "Task",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "Task",
        },
        {
          type: "success",
          content: "Task",
        },
        {
          type: "error",
          content: "Task",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "Task",
        },
        {
          type: "success",
          content: "Task",
        },
        {
          type: "error",
          content: "Task",
        },
        {
          type: "error",
          content: "Task",
        },
        {
          type: "error",
          content: "Task",
        },
        {
          type: "error",
          content: "Task",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const index = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Some Notes</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="mt-4">
      <h2 className="text-purple-500 text-3xl">Planner</h2>
      <Row gutter={[8, 4]}>
        <Col xs={24}>
          <Calendar cellRender={cellRender} onPanelChange={onPanelChange} />
        </Col>
      </Row>
    </div>
  );
};

export default index;
