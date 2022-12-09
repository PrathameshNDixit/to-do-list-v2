import React, { useState } from "react";


function Fruits() {
    const [fruit, setFruit] = useState("");
	const [ipText,setIpText]=useState('');
    return (
        <>
            <p>The value of fruit is:{fruit}</p>
			<input type="text" onChange={(event)=>setIpText(event.target.value)} />
            <button onClick={()=>{setFruit(ipText)}}>Submit</button>
        </>
    );
}

export default Fruits;
