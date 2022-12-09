import React, { useState } from "react";

function Child1(props) {
    const [countInChild1, setCountInChild1] = useState(0);
    function updateCountinChild() {
        setCountInChild1(countInChild1 + 1);
        props.ParentCount(countInChild1 + 1);
    }
    return (
        <>
            <p>Count in Child1 :{countInChild1}</p>
            <button onClick={updateCountinChild}>Increment</button>
        </>
    );
}

export default Child1;
