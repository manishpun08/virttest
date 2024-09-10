"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials (replace with API call in production)
    const hardcodedUsername = "admin";
    const hardcodedPassword = "password123";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Set the logged-in cookie with security settings
      Cookies.set("loggedin", "true", {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });

      // Redirect to the dashboard
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="p-10 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="border p-2 rounded w-full"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(""); // Clear error when user starts typing
            }}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border p-2 rounded w-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error when user starts typing
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
