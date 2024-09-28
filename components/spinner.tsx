import { Spin } from "antd";
import React from "react";

function Spinner() {
  return (
    <div>
      <Spin tip="Loading" size="small"></Spin>
    </div>
  );
}

export default Spinner;
