import { Card, Col, Row } from "antd";
import Grid from "@mui/material/Grid";

//components
import ProjProgress from "./ProjProgres";
import ActiveUsers from "./ActiveUsers";
import Progressreport from "./Pregressreport";
import BarChartItem from "./BarChartItem";
import PicChartData from "./PiechartData";
import TableDataItem from "./TableDataItem";

const Charts = () => {
  return (
    <>
      <Row gutter={[8, 4]}>
        <Col xs={24} md={8}>
          <ProjProgress />
        </Col>
        <Col xs={24} md={8}>
          <ActiveUsers />
        </Col>
        <Col xs={24} md={8}>
          <Progressreport />
        </Col>
        <Col xs={24} md={16}>
          <BarChartItem />
        </Col>
        <Col xs={24} md={8}>
          <PicChartData />
        </Col>
        <Col xs={24}>
          <TableDataItem />
        </Col>
      </Row>
    </>
  );
};

export default Charts;
