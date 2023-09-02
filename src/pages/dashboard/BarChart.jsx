import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
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
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default BarChart;
