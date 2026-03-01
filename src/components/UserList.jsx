import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Component Mounted");

    const controller = new AbortController(); // for cleanup
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      console.log("Component Unmounted - Cleanup Running");
      controller.abort();
    };
  }, []);

  if (loading) 
    return <h2>Loading users...</h2>;

  if (error) 
    return <h2 style={{ color: "red" }}>
        Error: {error}</h2>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;