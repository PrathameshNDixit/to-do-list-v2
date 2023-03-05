import React from "react";
import "./Listall.css";
import {FaTrash} from "react-icons/fa";
function List(props) {
    function updateCommune() {
        props.commune(props.id);
    }
    return (
        <div key={props.id} className="card">
            <h2 className="card-title">{props.title}</h2>
            <p className="para">{props.desc}</p>
            <div className="card-div">
                <p>{new Date().toLocaleDateString()}</p>
                <p>{new Date().toLocaleTimeString()}</p>
                <FaTrash onClick={updateCommune}/>
            </div>
        </div>
    );
}

export default List;
