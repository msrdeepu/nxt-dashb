import "./notes.css";
import "../../app/globals.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1 className="note-title">{props.title}</h1>
      <p className="note-matter">{props.content}</p>
      <Button
        className="note-button"
        onChange={handleClick}
        startIcon={<DeleteIcon />}
      ></Button>
    </div>
  );
};

export default Note;
