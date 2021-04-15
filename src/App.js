import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Infobar from "./components/infobar/Infobar";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
      <Infobar />
    </div>
  );
}

export default App;
