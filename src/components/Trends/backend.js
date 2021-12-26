import React, { useState, useEffect } from "react";
import LineTrends from "./chart";
import { WrapperS } from "../../styled/global";

const Backend = ({ datas }) => {
  return (
    <WrapperS>
      <LineTrends datas={datas} />
    </WrapperS>
  );
};

export default Backend;
