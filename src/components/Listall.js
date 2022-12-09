import React, { useState } from "react";
import "./Listall.css";
import List from "./List";
function Listall() {
    const [lists, setLists] = useState([]);
    const [ipText, setIpText] = useState("");
    function newList(event) {
        setIpText(event.target.value);
    }
    function updateLists() {
        const listArray = [...lists, ipText];
        setLists(listArray);
    }
    function childCommune(id) {
        let newList = [];
        for (let index = 0; index < lists.length; index++) {
            if (index !== id) {
                newList.push(lists[index]);
            }
        }
        setLists(newList);
    }
    return (
        <div className="todo-list">
            <div className="main">
                <h1>TODO LIST</h1>
                <div className="container">
                    <input
                        className="inputList"
                        type="text"
                        placeholder="Type Something..."
                        onChange={newList}
                    />
                    <button className="btn" onClick={updateLists}>
                        Add
                    </button>
                </div>
                <div className="grid">
                    {lists.map((list, i) => {
                        return (
                            <List name={list} commune={childCommune} id={i} />
                        );
                    })}
                </div>
            </div>

            <div className="footer">
                <a target="_blank" href="https://www.linkedin.com/in/prathamesh-dixit-440072200/"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a target="_blank" href="https://github.com/PrathameshNDixit"><i class="fa-brands fa-github fa-2x"></i></a>    
            </div>
        </div>
    );
}

export default Listall;
