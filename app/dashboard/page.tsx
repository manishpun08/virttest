"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Dashboard = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check for the "loggedin" cookie
    const auth = Cookies.get("loggedin");

    if (auth === "true") {
      setAuthenticated(true);
    } else {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  const handleLogout = () => {
    // Remove the "loggedin" cookie to log out
    Cookies.remove("loggedin");

    // Redirect to login page
    router.push("/login");
  };

  // Don't show the page until authenticated
  if (!authenticated) return null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Protected Dashboard</h1>
      <p>Welcome to the protected route!</p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
