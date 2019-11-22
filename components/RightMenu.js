import { Menu } from "antd";

export default function RightMenu(props) {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <a href="">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="">Signup</a>
      </Menu.Item>
    </Menu>
  );
}
