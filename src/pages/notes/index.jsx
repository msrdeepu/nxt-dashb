import { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";

//data
// const noteslist = [
//   {
//     key: 1,
//     title: "Delegation",
//     content:
//       "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
//   },
//   {
//     key: 2,
//     title: "Loops",
//     content:
//       "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
//   },
//   {
//     key: 3,
//     title: "Arrays",
//     content:
//       "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
//   },
//   {
//     key: 4,
//     title: "Hardware vs. Software",
//     content:
//       "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
//   },
// ];

const Notes = () => {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </>
  );
};

export default Notes;
