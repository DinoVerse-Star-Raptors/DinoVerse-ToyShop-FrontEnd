import React from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet is used for rendering child routes
import SimpleNavbar from "../../components/layout/SimpleNavbar"; // Import Navbar
import SimpleFooter from "../../components/layout/SimpleFooter"; // Import Footer
import uiStyle from "./User.module.css"; // CSS module for dashboard-specific styles

const UserPanel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Render the Navbar at the top */}
      <SimpleNavbar />
      <main
        className={`mt-[64px] min-h-svh w-full max-w-[1440px] ${uiStyle.mx_auto}`}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              width: "250px",
              padding: "20px",
              background: "#f4f4f4",
              borderRight: "2px solid #ddd",
              height: "100%", // Make sure sidebar takes full height
            }}
          >
            <h2>User Panel</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
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
            {/* <h2>Welcome to your user panel</h2> */}
            {/* This will render the matched child route */}
            <Outlet />
          </div>
        </div>
      </main>

      {/* Render the Footer at the bottom */}
      <SimpleFooter />
    </div>
  );
};

export default UserPanel;

// // pages/User/UserPanel.js
// import React from "react";
// import { Link, Outlet } from "react-router-dom"; // Outlet is used for rendering child routes

// const UserPanel = () => {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <div
//         style={{
//           width: "250px",
//           padding: "20px",
//           background: "#f4f4f4",
//           borderRight: "2px solid #ddd",
//         }}
//       >
//         <h2>User Panel</h2>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           <li>
//             <Link to="profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="settings">Settings</Link>
//           </li>
//           <li>
//             <Link to="orders">Orders</Link>
//           </li>
//           <li>
//             <Link to="logout">Logout</Link>
//           </li>
//         </ul>
//       </div>
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h2>Welcome to your user panel</h2>
//         {/* This will render the matched child route */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default UserPanel;
