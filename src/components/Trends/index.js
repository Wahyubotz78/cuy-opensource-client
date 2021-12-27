import React, { useState, useEffect } from "react";
import axios from "axios";
import { WrapperS, ClearTopS } from "../../styled/global";
import { HeaderTrends } from "../../styled/TrendsStyle";
import LineTrends from "./chart";

const Trends = () => {
  const [getTrendsBackend, setTrendsBackend] = useState({});
  const [getTrendsFrontend, setTrendsFrontend] = useState({});
  const [isGetDataBackend, isSetDataBackend] = useState(false);
  const [isGetDataFrontend, isSetDataFrontend] = useState(false);

  const [formDataBackend, setFormDataBackend] = useState([]);
  const [formDataFrontend, setFormDataFrontend] = useState([]);
  const [isGetFormDataBackend, isSetFormDataBackend] = useState(false);
  const [isGetFormDataFrontend, isSetFormDataFrontend] = useState(false);

  const url = "https://outdated-trends.herokuapp.com/trends";
  const headers = {
    "Content-Type": "application/json",
  };
  // const formDataBackend = ["php", "javascript"];
  // const formDataFrontend = ["tailwind", "bootstrap"];

  useEffect(async () => {
    const fetchFormDataBackend = async () => {
      let { data } = await axios.get(
        "https://survey-stackoverflow.herokuapp.com/db",
        headers
      );
      setFormDataBackend(data);
    };
    const fetchFormDataFrontend = async () => {
      let { data } = await axios.get(
        "https://survey-stackoverflow.herokuapp.com/lp",
        headers
      );
      setFormDataFrontend(data);
    };
    if (!isGetFormDataBackend) {
      await fetchFormDataBackend();
      isSetFormDataBackend(true);
    }
    if (!isGetFormDataFrontend) {
      await fetchFormDataFrontend();
      isSetFormDataFrontend(true);
    }
  }, []);

  useEffect(async () => {
    const fetchDataBackend = async () => {
      let { data } = await axios.post(
        url,
        {
          word: formDataBackend,
        },
        headers
      );
      setTrendsBackend(data);
    };
    const fetchDataFrontend = async () => {
      let { data } = await axios.post(
        url,
        {
          word: formDataFrontend,
        },
        headers
      );
      setTrendsFrontend(data);
    };
    if (!isGetDataBackend && isGetFormDataBackend) {
      await fetchDataBackend();
      isSetDataBackend(true);
    }
    if (!isGetDataFrontend && isGetFormDataFrontend) {
      await fetchDataFrontend();
      isSetDataFrontend(true);
    }
  }, [isGetFormDataBackend, isGetFormDataFrontend]);

  return (
    <WrapperS>
      <HeaderTrends>Trends Language Programming</HeaderTrends>
      {isGetDataBackend && (
        <LineTrends
          datas={getTrendsBackend}
          keywordsData={formDataBackend}
          title="Backend Populer"
        />
      )}
      <ClearTopS />
      {isGetDataFrontend && (
        <LineTrends
          datas={getTrendsFrontend}
          keywordsData={formDataFrontend}
          title="Frontend Populer"
        />
      )}
    </WrapperS>
  );
};

export default Trends;
