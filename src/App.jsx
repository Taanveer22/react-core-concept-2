import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Posts from "./Posts";

function App() {
  // when no parameter passed to the handleclick function
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  // when any parameter passed to the handleclick function (vejaila function)

  const addToFive = (number) => {
    alert(number + 5);
  };

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <ul>
        <li>component</li>
        <li>jsx</li>
        <li>props</li>
        <li>event handler</li>
        <li>hook/state</li>
        <li>load data</li>
      </ul>
      <Posts></Posts>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/*when no paramater passed to the handleclick button   */}
      <button onClick={handleClick}>click me</button> <br /> <br />
      <button onClick={handleClick2}>click me 2</button> <br /> <br />
      <button
        onClick={() => {
          alert("button  3 clicked");
        }}
      >
        click me 3
      </button>{" "}
      <br /> <br />
      {/* when any parameter passed to the handleclick button ( vejailla function ) */}
      <button onClick={() => addToFive(3)}>click me 4</button> <br /> <br />
    </>
  );
}

export default App;
