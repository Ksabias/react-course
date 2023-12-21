import React from "react";
import "./Card.css";

export const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {data?.map((item) => (
        <form
          className="form"
          key={`${item.name}-${item.id}`}
          onSubmit={item.submitter}
        >
          <div>ID: {item.id}</div>

          <div>Name: {item.name}</div>

          <ul>
            {item?.skills.map((skill) => (
              <li key={`${skill}-${item.id}`}>{skill}</li>
            ))}
          </ul>

          <button type="submit">Submit</button>
        </form>
      ))}
    </div>
  );
};
