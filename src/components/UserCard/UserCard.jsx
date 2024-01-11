import React, { useContext } from "react";
import { UserInfoContext } from "../../App";

const UserCard = () => {
  const data = useContext(UserInfoContext);

  if (!data || Object.entries(data)?.length === 0) {
    return <h1>No data yet</h1>;
  }

  return (
    <div>
      <h1>User info</h1>

      <div>Username: {data.name}</div>

      {data.permissions?.length > 0 && (
        <div>
          Permissions:
          {data.permissions?.map((permission, index) => (
            <span key={`${index}-${permission}`}>
              {" "}
              {permission}
              {index < data.permissions.length - 1 && ","}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;
