import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "2px solid orange",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={counterStyle}>
      <h3>counter: {count} </h3>
      <button onClick={handleAdd}>addBtn</button> <br /> <br />
      <button onClick={handleReduce}>reduceBtn</button> <br /> <br />
    </div>
  );
}
