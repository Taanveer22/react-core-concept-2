import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  const playerStyle = {
    border: "2px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={playerStyle}>
      <h3>players: {team} </h3>
      <button onClick={handleAdd}>add</button> <br /> <br />
      <button onClick={handleRemove}>remove</button> <br /> <br />
    </div>
  );
}
