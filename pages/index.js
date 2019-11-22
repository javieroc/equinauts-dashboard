import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Footer, Content } = Layout;

import LayoutDashboard from "../components/Layout";

export default function Home(props) {
  return (
    <LayoutDashboard title="Equinauts">
      <h1>Hello world</h1>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Revenue</Menu.Item>
        <Menu.Item key="3">Opportunities</Menu.Item>
        <Menu.Item key="4">Health</Menu.Item>
        <Menu.Item key="5">Key Insights</Menu.Item>
        <Menu.Item key="6">Settings</Menu.Item>
      </Menu>
    </LayoutDashboard>
  );
}
