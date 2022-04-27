import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
        let noteBody = JSON.stringify(note.body)
        const noteTitle = noteBody.split('\\')[0].substring(2, noteBody.split('\\')[0].length-1)
        console.log(noteTitle)
        
        return (<div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">
                    {noteTitle}
                    <span 
                        className="icon-container"
                        onClick={() => props.deleteNote(note.id)}
                    ></span>
                    </h4>
            </div>
        </div>
        )
    })

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
