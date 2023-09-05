import "./notes.css";
import { Button } from "@mui/material";
import { Zoom } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../../app/globals.css";

//hooks
import { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);
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
    setNote({
      title: "",
      content: "",
    });
  }
  function expand() {
    setExpand(true);
  }
  return (
    <div>
      <header className="header-item w-[auto] text-[#1976D2]">
        <h1 className="text-center text-3xl">Take Notes</h1>
      </header>
      <form className="create-note">
        {isExpanded ? (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          value={note.content}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab
            className="button-item"
            variant="contained"
            type="primary"
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
