import React from "react";
import Addnote from "./Addnote";
import Note from "./Note";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
