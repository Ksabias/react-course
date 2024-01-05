import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!params.id) return;

    const getUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      const data = await res.json();
      setUser(data);
    };

    getUser();
  }, [params.id]);

  return <div>Name: {user.name}</div>;
};

export default UserDetails;
