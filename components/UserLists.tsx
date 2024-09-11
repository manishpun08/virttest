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

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error("Fetch error: ", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="font-bold text-2xl">Loading...</p>;
  if (error)
    return (
      <div>
        <p className="text-2xl font-bold">{error}</p>
      </div>
    );
  if (users.length === 0)
    return <p className="text-2xl">No users available.</p>;

  return (
    <>
      <h1 className="font-bold text-2xl pb-4">User Names</h1>

      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserLists;
