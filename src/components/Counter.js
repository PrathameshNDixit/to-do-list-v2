import React, { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
    function updateCount() {
        setCount(count + 1);
    }
    return (
        <>
            <p>value of count is :{count}</p>
            <button onClick={updateCount}>incr</button>
        </>
    );
}

export default Counter;
