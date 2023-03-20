
import React, { useState } from "react";
import "./Sidebar.css";
import Menu from "./Menu";

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <button className="toggle-button" onClick={handleToggle}>
          {collapsed ? "<" : ">"}
        </button>
        <Menu />
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Sidebar;
