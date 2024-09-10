"use client";
import React from "react";

interface User {
  id: number;
  name: string;
}

const UserLists = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="font-bold text-2xl">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="font-bold text-2xl py-2">
        Task 2: Implement and Test a React Component with API Integration
      </h1>
      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
export default UserLists;
