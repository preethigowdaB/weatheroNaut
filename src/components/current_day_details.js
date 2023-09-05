import moment from "moment/moment";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import sunrise from "../assets/sunrise (1).png";
import sunset from "../assets/sunset.png";
import moonrise from "../assets/moonrise.png";
import moonset from "../assets/moonset.png";
const CurrentDayDetails = ({ current_data, forecast_data }) => {
  return (
    <div className=" font_family_poppins">
        <p className="mt-3 fs_20 fw_500 ms-sm-5 ps-sm-5">Today Overview</p>
        <div className="row g-0 d-flex justify-content-center">
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>Wind Speed</p>
            <p>{current_data?.wind_kph} Km/h</p>
          </div>
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>visibility</p>
            <p>{current_data?.vis_km} Km</p>
          </div>
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>Humidity</p>
            <p>{current_data?.humidity}%</p>
          </div>
          {/* <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>Pressure</p>
            <p>{current_data?.pressure_mb} hpa</p>
          </div> */}
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem", height: "13rem" }}
          >
            <p>UV Index</p>
            <ReactSpeedometer
              width={170}
              height={200}
              segments={20}
              needleHeightRatio={0.8}
              needleColor={"black"}
              customSegmentStops={[0, 5, 10, 15, 20]}
              segmentColors={["orange"]}
              minValue={0}
              maxValue={20}
              value={current_data?.uv}
            />
          </div>
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>Sunrise & Sunset</p>
            {moment(forecast_data?.[0]?.date)?.format("DD/MM/YYYY") ===
            moment(new Date())?.format("DD/MM/YYYY") ? (
              <>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={sunrise} alt="sunrise" height={45} />
                  </div>
                  <div className="ms-3">
                    {forecast_data?.[0]?.astro?.sunrise}
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={sunset} alt="sunset" height={45} />
                  </div>
                  <div className="ms-3">
                    {forecast_data?.[0]?.astro?.sunset}
                  </div>
                </div>
              </>
            ) : (
              "No Data"
            )}
          </div>
          <div
            className="col-lg-4 shadow p-3 mb-4 mx-4 bg-white rounded-4"
            style={{ maxWidth: "15rem" }}
          >
            <p>Moonrise & Moonset</p>
            {moment(forecast_data?.[0]?.date)?.format("DD/MM/YYYY") ===
            moment(new Date())?.format("DD/MM/YYYY") ? (
              <>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={moonrise} alt="moonrise" height={45} />
                  </div>
                  <div className="ms-3">
                    {forecast_data?.[0]?.astro?.moonrise}
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={moonset} alt="moonset" height={45} />
                  </div>
                  <div className="ms-3">
                    {forecast_data?.[0]?.astro?.moonset}
                  </div>
                </div>
              </>
            ) : (
              "No Data"
            )}
          </div>
        </div>
    </div>
  );
};

export default CurrentDayDetails;
