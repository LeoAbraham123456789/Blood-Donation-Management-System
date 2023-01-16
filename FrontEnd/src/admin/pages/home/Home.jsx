import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.scss"
import { Chart } from "../../components/chart/Chart";
import { List } from "../../components/table/Table";

const Home = () => {
  return (
    <div className="adm_home">
      <Sidebar/>
      <div className="adm_homeContainer">
        <div className="adm_charts">
          
          <Chart title="Last 6 Months (Donors)" aspect={2/1}/>
        </div>
      </div>
    </div>
  );
}

export default Home;