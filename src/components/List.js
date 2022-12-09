import React from "react";
import "./Listall.css";
function List(props) {
    function updateCommune() {
        props.commune(props.id);
    }
    return (
        <div key={props.id} className="card">
            <p className="para">{props.name}</p>
            <div className="card-div">
                <p>{new Date().toLocaleDateString()}</p>
                <p>{new Date().toLocaleTimeString()}</p>
                <i onClick={updateCommune} class="fa-solid fa-trash"></i>
            </div>
        </div>
    );
}

export default List;
