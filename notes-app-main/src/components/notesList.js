// import Notes from "./Notes";
import Notes from "./notes";
import AddNote from "./addNote";

const NotesList = ({ note, addNote, deleteNote }) => {
    return (
        <div className="notes-list">
            {note.map((note) => (
                <Notes
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNote={deleteNote}
                />
            ))}
            <AddNote addNote={addNote} />
        </div>
    )
}

export default NotesList;