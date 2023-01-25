import React from "react";
import SidebarDashboard from "./SidebarDashboard/SidebarDashboard.jsx";
import BarChartBets from "./Charts/BarChartBets.jsx";

import "./Dashboard.css";
import BarChartDeposits from "./Charts/BarChartDeposits.jsx";
import PieChart from "./Charts/PieChart.jsx";
import BarChartMatches from "./Charts/BarChartMatches.jsx";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <SidebarDashboard />
      </div>
      <div className="cnttables">
        <h1 className="titletable">Gráfico Usuarios vs Apuestas Totales(dolares)</h1>
        <BarChartBets />
        <h1 className="titletable">Gráfico Usuarios vs Depositos Totales(dolares)</h1>
        <BarChartDeposits />
        <h1 className="titletable">Gráfico Partidos vs Apuestas Totales(dolares)</h1>
        <BarChartMatches />
        <h1 className="titletable">Gráfico Usuarios Activos</h1>
        <PieChart />
      </div>
    </div>
  );
}
