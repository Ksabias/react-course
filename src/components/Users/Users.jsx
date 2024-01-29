import { useFetch } from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <Link to={`${user.id}`}>{user.name}</Link>
            <h3>{user.username}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
