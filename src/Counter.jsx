import { useState } from "react"

export default function Counter() {

    const counterStyle = {
        border: '2px solid yellow',
        margin: '10px'
    }

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    

    return (
        <div style={counterStyle}>
            <h3>counter: {count} </h3>
            <button onClick={handleAdd}>addBtn</button>
            <button onClick={handleReduce}>reduceBtn</button>
        </div>
    )
}