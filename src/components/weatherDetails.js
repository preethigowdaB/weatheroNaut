import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CurrentDayDetails from "./current_day_details";
import Weekly_data from "./weekly_data";
import NavbarComponent from "./navbar_component";
import loader from "../assets/Spin-1s-200px.gif";
const WeatherDetails = () => {
  const [current_data, setCurrent_data] = useState();
  const [location, setLocation] = useState();
  const [search, setSearch] = useState("Delhi");
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);
  const Api_key = {
    key: "034b313f403a4712add145246230808",
  };

  useEffect(() => {
    const fetchdata = async () => {
      
      try {
        setLoading(true);
        const res = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${Api_key?.key}&q=${search}&days=7`
        );
        console.log(res?.data);
        console.log(search);
        setCurrent_data(res?.data?.current);
        setLocation(res?.data?.location);
        setForecast(res?.data?.forecast);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const d = new Date();
  let day = d.getDay();
  let time = new Date().toLocaleTimeString();
  const currday = (dayInDig) => {
    if (dayInDig === 1) {
      return "Monday";
    } else if (dayInDig === 2) {
      return "Tueday";
    } else if (dayInDig === 3) {
      return "Wednesday";
    } else if (dayInDig === 4) {
      return "Thursday";
    } else if (dayInDig === 5) {
      return "Friday";
    } else if (dayInDig === 6) {
      return "Saturday";
    } else {
      return "Sunday";
    }
  };

  const handleClick = () => {
    if (search !== "") {
      const fetchdata = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${Api_key?.key}&q=${search}&days=7`
          );
          console.log(res?.data);
          setCurrent_data(res?.data?.current);
          setLocation(res?.data?.location);
          setForecast(res?.data?.forecast);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      };
      fetchdata();
    }
    setSearch("");
  };

  return (
    <>
      {loading ? (
        <div
          className="bg-light d-flex ff_poppins justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            zIndex: "10000",
          }}
        >
          <img src={loader} alt="Loading..." height={50} />
          <div>Loading...</div>
        </div>
      ) : (
        <div className="row g-0 font_family_poppins">
          <NavbarComponent />
          <div className="col-md-3 mb-5 mb-sm-0">
            <input
              type="search"
              placeholder="Search location here.."
              value={search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              className="ms-4 mt-4 pt-2 border-0 border-bottom border-secondary ps-2"
              style={{ outline: "none" }}
            />
            <span>
              <button
                onClick={handleClick}
                className="border-0 bg-primary rounded text-white py-1 fs_12"
              >
                Search
              </button>
            </span>
            <img
              src={current_data?.condition?.icon}
              className="img-fluid my-3"
              width={200}
            />
            <div className="fs_58 ms-4 ps-2 fw_500 mt-3 pt-1">
              {current_data?.temp_c}
              <sup>°C</sup>
            </div>
            <p className="fs_18 ms-4 ps-2 fw_400">
              {currday(day)}, {time}
            </p>
            <div className="fs_18 ms-4 ps-2 fw_400 mt-3">
              <img src={current_data?.condition?.icon} width={50} />
              <span className="text-capitalize">
                {current_data?.condition?.text}
              </span>
            </div>
            <div className="d-flex align-items-center fs_18 ms-4 ps-2 fw_400 mt-3">
              <div>
                <i class="ri-map-pin-line"></i>
              </div>
              <div className="ms-2 fs_18 fw_400 ">
                {/* <span>{location?.name},</span> */}
                <span>{location?.region},</span>
                <span>{location?.country}</span>
              </div>
            </div>
          </div>
          <div className="col-md-9 background_color  py-3">
            <p className="fs_20 fw_500 ms-5 ps-5 mt-3 mt-sm-0">
              Weekly Overview
            </p>

            <Weekly_data forecast_data={forecast?.forecastday} />
            <CurrentDayDetails
              current_data={current_data}
              forecast_data={forecast?.forecastday}
            />
            {/* <Graph temp_values={array_temp}/> */}
            <div></div>
          </div>
        </div>
      )} 
    </>
  );
};

export default WeatherDetails;
