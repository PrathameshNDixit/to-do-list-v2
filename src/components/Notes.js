import React, { useState } from "react";
import SingleNOte from "./SingleNOte";
function Notes() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState("");
    function updateCurrentNote(e) {
        setCurrentNote(e.target.value);
    }
    function addNote() {
        const newNote = [...notes, currentNote];
        setNotes(newNote);
    }
    const newStyle={
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap:'20px',
        listSTyle:'none',
        margin:'0',
        padding:'0px'
    }
    return (
        <>
            <input type="text" onChange={updateCurrentNote} />
            <button onClick={addNote}>submit</button>
            <div style={newStyle}>
                {notes.map((note, i) => {
                    return <SingleNOte note={note}/>;
                })}
            </div>
        </>
    );
}

export default Notes;
