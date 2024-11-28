import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data

function Password() {
  const { user } = useAuth(); // Access user data and logout function from context
  const navigate = useNavigate(); // Use navigate for redirection

  const [isLoading, setIsLoading] = useState(true); // Loading state to handle user data fetch

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login page if no user data is available
    } else {
      setIsLoading(false); // Set loading to false when user data is available
    }
  }, [user, navigate]); // Run this effect when `user` changes

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking user data
  }

  return (
    <>
      <section className="flex justify-center py-[16px]">
        <div className="w-full">
          <div className="flex-col items-center justify-start text-center">
            <h1 className="font-roboto text-[32px] font-normal text-black">
              Password, {user.fullname}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Password;
