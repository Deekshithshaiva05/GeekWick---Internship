import React from "react";

export default function UserCard({ name, role }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}