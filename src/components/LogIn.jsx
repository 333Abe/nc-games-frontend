import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";

const LogIn = ({ user, setUser }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>loading users</p>;
  }

  return (
    <main>
      <h2>log-in page</h2>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        {users.map((user) => {
          return (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
      <p>{user !== "" ? `` : `user is not logged in`}</p>
      {users.map((selectedUser) => {
        if (selectedUser.username === user)
          return (
            <section>
              <p>Welcome back {selectedUser.name}</p>
              <p>You're logged in as {selectedUser.username}</p>
              <img
                src={selectedUser.avatar_url}
                alt={`${selectedUser} avatar`}
              />
            </section>
          );
      })}
    </main>
  );
};

export default LogIn;
