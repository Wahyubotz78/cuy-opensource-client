import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const colors = {
  // Light theme colors
  light: ["#ff0000", "#006900", "#0000ff", "#ff9922", "#800080"],

  // Dark theme colors
  dark: ["#ff0000", "#00ff00", "#00ffff", "#ffcc00", "#ff00ff"],
};

const options = (text) => {
  const data = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text,
        color: "#ffffff",
      },
    },
  };

  return data;
};

const mapMultiLine = (data, keywords) => {
  const mappedData = [];

  for (let i = 0; i < keywords.length; i++) {
    const value = [];

    data.yAxis.forEach((element) => {
      value.push(element[i]);
    });

    mappedData.push({
      label: keywords[i],
      data: value,
      backgroundColor: [colors["dark"][i]],
      borderColor: [colors["dark"][i]],
      borderWidth: 2,
      lineTension: 0.3,
    });
  }

  return mappedData;
};

const LineTrends = ({ datas, keywordsData, title }) => {
  const labels = datas.xAxis;
  const datasets = mapMultiLine(datas, keywordsData);

  const data = {
    labels,
    datasets,
  };

  return <Line options={options(title)} data={data} />;
};

export default LineTrends;
