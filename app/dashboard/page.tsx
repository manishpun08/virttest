"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (auth === "true") {
      setAuthenticated(true);
    } else {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  if (!authenticated) return null; // Don't show the page until authenticated

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Protected Dashboard</h1>
      <p>Welcome to the protected route!</p>
    </div>
  );
};

export default Dashboard;
