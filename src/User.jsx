import { useState } from "react";

export default function User({ user }) {
  console.log(user);
  const { name, email } = user;

  const userStyle = {
    border: "2px solid black",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={userStyle}>
      <h4>name:{name}</h4>
      <p>email:{email}</p>
    </div>
  );
}
