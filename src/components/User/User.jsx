import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

const User = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get("/sign-in", {
          signal: controller.signal,
        });
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li>{user?.userName}</li>
          ))}
        </ul>
      ) : (
        <p>No Users to display</p>
      )}
    </div>
  );
};

export default User;
