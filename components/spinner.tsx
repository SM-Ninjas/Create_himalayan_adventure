import { Spin } from "antd";
import React from "react";

function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spin tip="Loading" size="large"></Spin>
    </div>
  );
}

export default Spinner;
