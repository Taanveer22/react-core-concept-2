import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const usersBox = {
    border: "2px solid red",
    margin: "20px",
    padding: "20px",
  };

  return (
    <div style={usersBox}>
      <h1>Total Users: {users.length}</h1>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}

/*
 * 1. declate a state to hold the data
 * 2. manage side effects by using useEffect(callbackFunction, dependency) hooks
 * 3. use fetch api to load the data
 * 4. set loaded data to the state
 *
 */
