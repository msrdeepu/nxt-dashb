import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";

//components
import BarChart from "./BarChart";
import Deposits from "./Deposits";
import DataTableChart from "./DataTableChart";
import SalesPercent from "../charts/SalesPercent";

const Charts = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SalesPercent />
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <BarChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Deposits />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <DataTableChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;
