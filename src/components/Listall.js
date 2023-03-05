import React, { useRef, useState } from "react";
import {FaSearch} from "react-icons/fa";
import {BsRepeat} from "react-icons/bs"
import "./Listall.css";
import List from "./List";
function Listall() {
    const [lists, setLists] = useState([]);
    const searchTextRef = useRef("");
    const [searchText, setSearchText] = useState("");
    const [prevListArray, setPrevListArray] = useState([]);
    const [resetTitle, setResetTitle] = useState("");
    const [resetText, setResetText] = useState("");

    function updateLists(event) {
        event.preventDefault();
        const newNoteUpdate = {
            title: resetTitle,
            desc: resetText,
        };
        console.log(newNoteUpdate);
        const listArray = [...lists, newNoteUpdate];
        event.value = "";
        setResetText("");
        setResetTitle("");
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

    function searchNote() {
        const searchResult = lists.filter((note) => {
            if (note.title === searchText) {
                return 1;
            } else {
                return 0;
            }
        });
        setPrevListArray(lists);
        setLists(searchResult);
    }
    function resetSearch() {
        setLists(prevListArray);
    }
    function takeSearch() {
        setSearchText(searchTextRef.current.value);
        if (searchTextRef === "") {
            setLists(prevListArray);
            updateLists();
        }
    }

    return (
        <div className="todo-list">
            <div className="main">
                <div className="head-h1">
                    <h1>Notes App</h1>
                </div>
                <div className="search-box">
                    <input
                        ref={searchTextRef}
                        onChange={takeSearch}
                        type="text"
                        className="search-text"
                        placeholder="Search..."
                    />
                    <button onClick={searchNote} className="search-btn">
                        <FaSearch size={35}/>
                    </button>
                    <button className="reset-btn" onClick={resetSearch}>
                        <BsRepeat size={35}/>
                    </button>
                </div>
                <div className="grid">
                    {lists.map((note, i) => {
                        return (
                            <List
                                title={note.title}
                                desc={note.desc}
                                commune={childCommune}
                                id={i}
                            />
                        );
                    })}
                    <form className="container" onSubmit={updateLists}>
                        <input
                            className="inputList"
                            type="text"
                            value={resetTitle}
                            onChange={(event) => {
                                setResetTitle(event.target.value);
                            }}
                            placeholder="Title..."
                            defaultValue=""
                        />
                        <textarea
                            value={resetText}
                            onChange={(event) => {
                                setResetText(event.target.value);
                            }}
                            cols="70"
                            rows="10"
                            className="text-area"
                            placeholder="Add note..."
                        ></textarea>
                        <div className="btn-container">
                            <button
                                type="submit"
                                value="save"
                                className="btn"
                                onClick={updateLists}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/prathamesh-dixit-440072200/"
                >
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/PrathameshNDixit"
                >
                    <i className="fa-brands fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Listall;
