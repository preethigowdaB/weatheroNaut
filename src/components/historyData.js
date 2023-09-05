// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const HistoryData = () => {
//   const [btn_search, setBtn_search] = useState("Mandya");

//   const Api_key = {
//     key: "034b313f403a4712add145246230808 ",
//   };
//   useEffect(() => {
//     const historyWeatherData = async() => {
//       try {
//         const result = await axios.get(
//             `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=508&lon=50&start=1606223802&end=1606482999&appid=86388bd3a760e51278df8b0ddb96e6f8`
//         );
//         console.log(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     historyWeatherData()
//   }, []);

//   return <div>HistoryData</div>;
// };

// export default HistoryData;
