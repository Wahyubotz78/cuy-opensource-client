import React, { useState, useEffect } from "react";
import axios from "axios";
import Backend from "./backend";
import Frontend from "./frontend";
import { WrapperS, TitleS } from "../../styled/global";

const Trends = () => {
  const [getTrendsBackend, setTrendsBackend] = useState({});
  const [getTrendsFrontend, setTrendsFrontend] = useState({});

  const url = "https://outdated-trends.herokuapp.com/trends";

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(async () => {
    const fetchDataBackend = async () => {
      let { data } = await axios.post(
        url,
        {
          word: ["php", "javascript"],
        },
        headers
      );
      setTrendsBackend(data);
    };
    const fetchDataFrontend = async () => {
      let { data } = await axios.post(
        url,
        {
          word: ["bootstrap", "tailwind"],
        },
        headers
      );
      setTrendsFrontend(data);
    };
    fetchDataBackend();
    fetchDataFrontend();
  }, []);

  return (
    <WrapperS>
      <h1>Trends Language Programming</h1>
      <Backend datas={getTrendsBackend} />
      <Frontend datas={getTrendsFrontend} />
    </WrapperS>
  );
};

export default Trends;
