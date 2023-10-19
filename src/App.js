import logo from "./logo.svg";
import "./App.css";
import Navbar from "./LandingPages/Navbar";
import Sidebar from "./LandingPages/Sidebar";
import Alicecarosl from "./LandingPages/Alicecarosl";
import BarChartComponent from "./components/charts/BarChartComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./components/charts/Master";
import Login from "./LandingPages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master Rcf={Navbar} />}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Alicecarosl /> */}
      {/* <Sidebar /> */}

      {/* <BarChartComponent /> */}
    </div>
  );
}

export default App;
