import "./notes.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../../app/globals.css";

//hooks
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <header className="header-item w-[auto] text-[#1976D2]">
        <h1 className="text-center text-3xl">Take Notes</h1>
      </header>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <Button
          className="button-item"
          variant="contained"
          type="primary"
          startIcon={<AddIcon />}
          onClick={submitNote}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default CreateArea;
