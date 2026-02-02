import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    // Increse Amount
    const handleButton = () => {
            const newCount = count+1;
            setCount(newCount);
    }

    // Decrease Amount
    const handleDecrease = () => {
            const newCount = count - 1;
            setCount(newCount);
    }
    return (
        <div style={{ border: '2px solid yellow'}}>
            <h3>Counter : {count} </h3>
            <button onClick={handleButton}>Add </button>
            <button onClick={handleDecrease}>Reduce</button>
        </div>
    )
}