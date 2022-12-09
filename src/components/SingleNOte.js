import React from "react";

function SingleNOte(props) {
    const mySTyle = {
        padding: "30px",
        borderRadius: "20px",
        border: "2px solid green",
        backgroundColor: "faintblue",
    };
    return (
        <div style={mySTyle}>
            <p>
                {props.note}
            </p>
        </div>
    );
}
export default SingleNOte;
