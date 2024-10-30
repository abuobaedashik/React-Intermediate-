import { Outlet } from "react-router-dom";
import NAvbar from "../Navbar/NAvbar";
import Footer from "../Footer/Footer";
import Prices from "../Prices/Prices";
import Chart from "../Chart/Chart";
import OtherChart from "../BarChart/OtherChart";

const Home = () => {
    return (
        <div>
            <NAvbar></NAvbar>
            <Outlet></Outlet>
            {/* <Prices></Prices>
            <Chart></Chart>
            <OtherChart></OtherChart> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;