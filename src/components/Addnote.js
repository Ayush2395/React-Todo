import React, { useState } from "react";

function Addnote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const characterLimiter = 200;

  const handleChange = (event) => {
    if (characterLimiter - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="new note">
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add new notes..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimiter - noteText.length} remaining</small>
        <button onClick={handleClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default Addnote;
