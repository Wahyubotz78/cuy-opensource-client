import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs, Title } from "chart.js";

ChartJs.register(Title);

export const colors = {
  // Light theme colors
  light: ["#ff0000", "#006900", "#0000ff", "#ff9922", "#800080"],
  // Dark theme colors
  dark: ["#ff0000", "#00ff00", "#00ffff", "#ffcc00", "#ff00ff"],
};

// const dataTrends = "https://insights.stackoverflow.com/trends/get-data";

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const mapMultiLine = (data, keywords) => {
  const mappedData = [];

  console.log(keywords);

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

const LineTrends = ({ datas }) => {
  // if (typeof datas === undefined) return;

  if (typeof datas === "object") {
    const keywords = datas.xAxis;
    // const datasets = mapMultiLine(datas, keywords);

    console.log(keywords);
  }
  // if (datas != "") {

  //   const data = {
  //     labels: keywords,
  //     datasets,
  //   };

  //   return <Line options={options} data={data} />;
  // }
  // {
  //   datas && <>loaded</>;
  // }

  // console.log();
  console.log(typeof datas);

  return <>test</>;
};

export default LineTrends;

// export default function LineTrends({ datas }) {
//   if (datas) {
//     console.log(datas);

//     // console.log(datasets);
//   }
//   //   {datas && return (

//   //   )

//   //   }}

//   // console.log(datasets);

//   return <>test</>;
// }
// export const LineTrends = (datas) => {
//   console.log(datas);
// };
