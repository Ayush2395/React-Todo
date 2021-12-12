import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

function Note({ text, id, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdOutlineDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
