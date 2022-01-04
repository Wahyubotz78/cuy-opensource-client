import React, { useState, useEffect } from "react";
import axios from "axios";
import { WrapperS, ClearTopS } from "../../styled/global";
import { HeaderTrends } from "../../styled/TrendsStyle";
import LineTrends from "./chart";

const Trends = () => {
  const [getTrendsDataBase, setTrendsDataBase] = useState({});
  const [getTrendsLanguage, setTrendsLanguage] = useState({});
  const [isGetDataDataBase, isSetDataDataBase] = useState(false);
  const [isGetDataLanguage, isSetDataLanguage] = useState(false);

  const [formDataDataBase, setFormDataDatabase] = useState([]);
  const [formDataLanguage, setFormDataLanguage] = useState([]);
  const [isGetFormDataDataBase, isSetFormDataDataBase] = useState(false);
  const [isGetFormDataLanguage, isSetFormDataLanguage] = useState(false);

  const url = "https://outdated-trends.herokuapp.com/trends";
  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(async () => {
    const fetchFormDataDataBase = async () => {
      let { data } = await axios.get(
        "https://survey-stackoverflow.herokuapp.com/db",
        headers
      );
      setFormDataDatabase(data);
    };
    const fetchFormDataLanguage = async () => {
      let { data } = await axios.get(
        "https://survey-stackoverflow.herokuapp.com/lp",
        headers
      );
      setFormDataLanguage(data);
    };
    if (!isGetFormDataDataBase) {
      await fetchFormDataDataBase();
      isSetFormDataDataBase(true);
    }
    if (!isGetFormDataLanguage) {
      await fetchFormDataLanguage();
      isSetFormDataLanguage(true);
    }
  }, []);

  useEffect(async () => {
    const fetchDataDataBase = async () => {
      let { data } = await axios.post(
        url,
        {
          word: formDataDataBase,
        },
        headers
      );
      setTrendsDataBase(data);
    };
    const fetchDataLanguage = async () => {
      let { data } = await axios.post(
        url,
        {
          word: formDataLanguage,
        },
        headers
      );
      setTrendsLanguage(data);
    };
    if (!isGetDataDataBase && isGetFormDataDataBase) {
      await fetchDataDataBase();
      isSetDataDataBase(true);
    }
    if (!isGetDataLanguage && isGetFormDataLanguage) {
      await fetchDataLanguage();
      isSetDataLanguage(true);
    }
  }, [isGetFormDataDataBase, isGetFormDataLanguage]);

  return (
    <WrapperS>
      <HeaderTrends>Trends Programming</HeaderTrends>
      {isGetDataDataBase && (
        <LineTrends
          datas={getTrendsDataBase}
          keywordsData={formDataDataBase}
          title="Database Populer"
        />
      )}
      <ClearTopS />
      {isGetDataLanguage && (
        <LineTrends
          datas={getTrendsLanguage}
          keywordsData={formDataLanguage}
          title="Language Populer"
        />
      )}
    </WrapperS>
  );
};

export default Trends;
