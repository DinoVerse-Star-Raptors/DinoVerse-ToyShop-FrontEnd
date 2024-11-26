import React from "react";
import { Link, Outlet } from "react-router-dom";
import SimpleNavbar from "../../components/layout/SimpleNavbar";
import SimpleFooter from "../../components/layout/SimpleFooter";
import { Home, User, Settings, ShoppingCart, LogOut } from "lucide-react";
import { Suspense } from "react";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data
// import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  // Access user data and logout function from context
  // const { user, logout } = useAuth();
  const { user } = useAuth();

  // Use the navigate hook for redirecting after logout
  // const navigate = useNavigate();

  // Handle logout functionality
  // const handleLogout = () => {
  //   logout(); // Call logout from AuthContext to clear user data
  //   navigate("/login"); // Redirect to the login page after logging out
  // };

  const menuItems = [
    {
      to: "dashboard",
      icon: <Home className="mr-3 h-5 w-5" />,
      label: "Dashboard",
    },
    {
      to: "profile",
      icon: <User className="mr-3 h-5 w-5" />,
      label: "Profile",
    },
    {
      to: "settings",
      icon: <Settings className="mr-3 h-5 w-5" />,
      label: "Settings",
    },
    {
      to: "orders",
      icon: <ShoppingCart className="mr-3 h-5 w-5" />,
      label: "Orders",
    },
    {
      to: "logout",
      icon: <LogOut className="mr-3 h-5 w-5 text-red-500" />,
      label: "Logout",
      // onClick: handleLogout, // Add logout functionality to the "Logout" menu item
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <SimpleNavbar />

      <div className="mx-auto mt-16 flex w-full max-w-[1440px] flex-1">
        {/* Sidebar */}
        <aside className="mr-6 w-64 space-y-2 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">User Panel</h2>
          {/* Display the username dynamically */}
          <p className="text-lg text-gray-600">
            Hi, {user?.username || "Guest"}
          </p>{" "}
          {/* Check if user is available, else display "Guest" */}
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center rounded-md px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 rounded-lg bg-white p-6 shadow-md">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default UserPanel;
