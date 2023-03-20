import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";

function Dashboard() {
  const date = new Date().toLocaleDateString();

    return (
      <div className="dashboard">
      <nav className="nav-header">
        <div className="logo">
           {/* <img src=# alt="logo" />  */}
          
        </div>
        <div className="date">{date}</div>
        <div className="account">
          <div className="name">Admin</div>
          <div className="settings">
            <i className="fas fa-cog"></i>
            <div>Account Settings</div>
          </div>
        </div>
      </nav>
      <div>
     <Sidebar/> 
      </div>
    </div>
    );
  };
 export default Dashboard ;