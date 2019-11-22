import Head from "next/head";
import { Layout, Menu, Icon } from "antd";
import Navbar from "./Navbar";

const { Header, Footer, Content } = Layout;

export default function LayoutComponent(props) {
  const { children, title } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </div>
  );
}
