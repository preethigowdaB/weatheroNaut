import moment from "moment";
import React from "react";

const Weekly_data = ({ forecast_data }) => {
 
  return (
    <div className="row g-0 d-flex justify-content-center font_family_poppins mx-1 mx-sm-0">
      {forecast_data?.map((item) => (
        <div className="col-2 shadow p-3 mb-2 mx-1 bg-white rounded" style={{width:"7rem"}}>
          <div className="fs_14">{moment(item?.date)?.format("dddd").substring(0,3)}</div>
          <img src={item?.day?.condition?.icon} width={40} />
          <div>
            <span className="fs_10">{item?.day?.maxtemp_c} °C</span>
            <span className="fs_10">-{item?.day?.mintemp_c} °C</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Weekly_data;
