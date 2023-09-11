import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Posts from './Posts';

function App() {

  // when no parameter passed to the handleclick function
  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert ('button 2 clicked')
  }

  // when any parameter passed to the handleclick function (vejaila function)

  const addToFive = (number) => {
    alert(number + 5);
  } 


  

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Posts></Posts>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/*when no paramater passed to the handleclick button   */}

      <button onClick={handleClick}>click me</button>

      <button onClick={handleClick2}>click me 2</button>

      <button onClick={() => { alert('button  3 clicked') }}>click me 3</button>
      
      {/* when any parameter passed to the handleclick button ( vejailla function ) */}

      <button onClick={() => addToFive(3)}>click me 4</button>

            
    </>
  )
}

export default App
