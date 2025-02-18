import React, { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);
    function incrementCounter() {
setCounter(counter + 1)
    }
    function decrementCounter() {
setCounter(counter - 1)
    }
    return (
    <div>
        <button onClick={incrementCounter}>+</button>
        {counter}
        <button onClick={decrementCounter}>-</button>
    </div>
    )
}
export default Counter