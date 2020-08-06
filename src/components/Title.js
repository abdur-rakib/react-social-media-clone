import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

const Title = ({ title }) => {
  return <Header className="text-dark">{title}</Header>;
};

export default Title;
