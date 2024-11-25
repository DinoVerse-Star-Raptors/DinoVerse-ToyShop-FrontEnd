// pages/User/UserPanel.js
import React from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet is used for rendering child routes

const UserPanel = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          padding: "20px",
          background: "#f4f4f4",
          borderRight: "2px solid #ddd",
        }}
      >
        <h2>User Panel</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Welcome to your user panel</h2>
        {/* This will render the matched child route */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;
