import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherDetails from "../components/weatherDetails";
import Graph from "../components/graph";
import CurrentDayDetails from "../components/current_day_details";
import Weekly_data from "../components/weekly_data";
const Path = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherDetails />} />
          <Route path="/graph" element={<Graph/>}/>
          <Route  path="/currentforecast" element={<CurrentDayDetails/>}/>
          <Route  path="/weeklyforecast" element={<Weekly_data/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default Path;
