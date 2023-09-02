import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//components
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <BarChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>Hello this is card</Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;