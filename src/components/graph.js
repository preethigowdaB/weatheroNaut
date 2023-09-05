import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale, //x-axis
  LinearScale, // y-axis
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line, getElementAtEvent } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const Graph = () => {

  const [forecast, setForecast] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=034b313f403a4712add145246230808&q=India&days=7`
        );
        console.log(res?.data);
        setForecast(res?.data?.forecast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const hour_data = forecast?.forecastday;
  const date_format = hour_data?.[0]?.date;
  const array_temp=[]
  const d = new Date();

  if (
    moment(date_format).format("DD/MM/YYYY") === moment(d).format("DD/MM/YYYY")
  ) {
    for (let i = 0; i < 24; i++) {
      let temp_data = hour_data?.[0]?.hour?.[i]?.temp_c;
      array_temp.push(temp_data)
    }
  }




  const labels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "temperature °C",
        data: array_temp,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const chartRef = useRef();
  const onClick = (e) => {
    console.log(chartRef);
    console.log(getElementAtEvent(chartRef.current,e));
  };

  return (
    <div className=" d-flex align-items-center">
      <div className="graph_container graph_container_sm">
        <Line 
        options={options} 
        data={data} 
        onClick={onClick} 
        ref={chartRef} />
      </div>
    </div>
  );
};

export default Graph;
