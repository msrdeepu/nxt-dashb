import "./maindstyle.css";
import "../../../app/globals.css";

//components
import Cards from "./Cards";

const MainDashboard = () => {
  return (
    <div className="maindash flex flex-col justify-evenly">
      <h1 className="text-3xl">Charts Data</h1>
      <Cards />
    </div>
  );
};

export default MainDashboard;
