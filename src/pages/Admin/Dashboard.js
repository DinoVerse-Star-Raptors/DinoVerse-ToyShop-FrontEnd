import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Custom hook for auth state
import { adminService } from "../services/adminService"; // Service to fetch admin data
import { StatusCodes } from "http-status-codes"; // Status codes for API responses

const AdminDashboard = () => {
  const { user, isAuthenticated, logout } = useAuth(); // Get user data from auth context
  const [dashboardData, setDashboardData] = useState(null); // State for storing dashboard data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const history = useHistory(); // History for redirection

  useEffect(() => {
    if (!isAuthenticated || !user.isAdmin) {
      history.push("/login"); // Redirect if not authenticated or not an admin
    } else {
      // Fetch dashboard data for the authenticated admin
      const fetchDashboardData = async () => {
        try {
          const response = await adminService.getDashboardData(); // Fetch dashboard data from the API
          if (response.status === StatusCodes.OK) {
            setDashboardData(response.data); // Set fetched data
          }
        } catch (err) {
          setError(err.message); // Set error if any occurs
        } finally {
          setLoading(false); // Set loading to false when done
        }
      };

      fetchDashboardData();
    }
  }, [isAuthenticated, user, history]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="admin-dashboard">
      <h1>Welcome, Admin {user.fullname}</h1> {/* Display admin name */}
      {/* Dashboard data */}
      <div className="admin-dashboard-summary">
        <h2>Site Overview</h2>
        <p>Total Users: {dashboardData.totalUsers}</p>
        <p>Total Orders: {dashboardData.totalOrders}</p>
        <p>Total Revenue: ${dashboardData.totalRevenue}</p>
        <p>Pending Orders: {dashboardData.pendingOrders}</p>
      </div>
      {/* Admin action buttons */}
      <div className="admin-actions">
        <button onClick={() => history.push("/admin/users")}>
          Manage Users
        </button>
        <button onClick={() => history.push("/admin/orders")}>
          Manage Orders
        </button>
        <button onClick={() => history.push("/admin/products")}>
          Manage Products
        </button>
      </div>
      {/* Logout button */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
