import { Menu } from "antd";

export default function LeftMenu(props) {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">Dashboard</Menu.Item>
      <Menu.Item key="2">Revenue</Menu.Item>
      <Menu.Item key="3">Opportunities</Menu.Item>
      <Menu.Item key="4">Health</Menu.Item>
      <Menu.Item key="5">Key Insights</Menu.Item>
      <Menu.Item key="6">Settings</Menu.Item>
    </Menu>
  );
}
