import { Col, Row, Card, Progress, Tooltip } from "antd";

const ProgressData = [
  {
    id: "1",
    tooltipTitle: "Completed",
    toolColor: "green",
    projectTitle: "Project 1",
    progressPercent: "100",
    strikeColor: "",
    status: "success",
  },
  {
    id: "2",
    tooltipTitle: "92% Completed",
    toolColor: "#346eeb",
    projectTitle: "Project 2",
    progressPercent: "92",
    strikeColor: "",
    status: "active",
  },
  {
    id: "3",
    tooltipTitle: "52% Completed",
    toolColor: "#ed1358",
    projectTitle: "Project 3",
    progressPercent: "52",
    strikeColor: "#ed1358",
    status: "active",
  },
  {
    id: "4",
    tooltipTitle: "Cancelled",
    toolColor: "#ed1313",
    projectTitle: "Project 4",
    progressPercent: "100",
    strikeColor: "#ed1313",
    status: "exception",
  },
];

function ProgressLayout(itemObj) {
  return (
    <Tooltip
      key={itemObj.id}
      title={itemObj.tooltipTitle}
      color={itemObj.toolColor}
    >
      <p>{itemObj.projectTitle}</p>
      <Progress
        percent={itemObj.progressPercent}
        strokeColor={itemObj.strikeColor}
        status={itemObj.status}
      />
    </Tooltip>
  );
}

const ProjProgress = () => {
  return (
    <div>
      <Row gutter={[8, 4]}>
        <Col xs={24} md={8}>
          <Card title="Projects Progress">
            {ProgressData.map(ProgressLayout)}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjProgress;
