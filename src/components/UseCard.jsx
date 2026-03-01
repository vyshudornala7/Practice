import React from "react";

const UserCard = ({ id, name, role, onPromote }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <button onClick={() => onPromote(id)}>
        Promote
      </button>
    </div>
  );
};

export default UserCard;