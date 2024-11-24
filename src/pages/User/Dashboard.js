// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth"; // Custom hook for auth state
// import { userService } from "../services/userService"; // Service to fetch user data
// import { StatusCodes } from "http-status-codes"; // Status codes for API responses

// const Dashboard = () => {
//   const { user, isAuthenticated, logout } = useAuth(); // Get user data from auth context
//   const [dashboardData, setDashboardData] = useState(null); // State for storing dashboard data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const history = useHistory(); // History for redirection

//   useEffect(() => {
//     if (!isAuthenticated) {
//       history.push("/login"); // Redirect if not authenticated
//     } else {
//       // Fetch dashboard data for the authenticated user
//       const fetchDashboardData = async () => {
//         try {
//           const response = await userService.getDashboardData(user.id); // Fetch dashboard data from the API
//           if (response.status === StatusCodes.OK) {
//             setDashboardData(response.data); // Set fetched data
//           }
//         } catch (err) {
//           setError(err.message); // Set error if any occurs
//         } finally {
//           setLoading(false); // Set loading to false when done
//         }
//       };

//       fetchDashboardData();
//     }
//   }, [isAuthenticated, user, history]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading indicator
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show error message
//   }

//   return (
//     <div className="dashboard">
//       <h1>Welcome back, {user.fullname}</h1> {/* Display user name */}
//       {/* Dashboard data */}
//       <div className="dashboard-summary">
//         <h2>Your Summary</h2>
//         <p>Total Orders: {dashboardData.totalOrders}</p>
//         <p>Total Spend: ${dashboardData.totalSpend}</p>
//         <p>Pending Orders: {dashboardData.pendingOrders}</p>
//       </div>
//       {/* Logout button */}
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
