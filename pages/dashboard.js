import React from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import ChartComponent from "../components/ChartComponent";

export default function Home(props) {
  return (
    <LayoutDashboard title="Equinauts">
      <ChartComponent />
      <ChartComponent />
      <ChartComponent />
      <ChartComponent />
    </LayoutDashboard>
  );
}
