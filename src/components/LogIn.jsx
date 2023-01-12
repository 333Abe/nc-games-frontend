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
        {users.map((user, index) => {
          return (
            <option key={index} value={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
      <p>{user !== "" ? `` : `user is not logged in`}</p>
      {users.map((selectedUser, index) => {
        if (selectedUser.username === user)
          return (
            <section key={index}>
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
