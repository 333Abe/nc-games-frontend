import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";

const LogIn = ({ setUser }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
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
    <div>
      <h2>log-in page</h2>
    </div>
  );
};

export default LogIn;
