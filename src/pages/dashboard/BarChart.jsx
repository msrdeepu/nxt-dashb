import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { Box } from "@mui/material";

const options = {
  title: {
    text: "Electronics Sales",
  },
  series: [
    {
      data: [
        { name: "Samsung", y: 25 },
        { name: "Vivo", y: 32 },
        { name: "Lenovo", y: 20 },
        { name: "Oppo", y: 35 },
        { name: "MI", y: 26 },
        { name: "Dell", y: 36 },
        { name: "HP", y: 38 },
        { name: "Apple", y: 41 },
      ],
    },
  ],
};

const BarChart = () => {
  return (
    <Box>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default BarChart;
