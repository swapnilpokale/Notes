import { useEffect, useState } from 'react';
import './App.css';
import NotesList from './components/notesList';
import { nanoid } from 'nanoid';
import Notes from './components/notes';
import Search from './components/search';
import Header from './components/header';

function App() {
  const [note, setNote] = useState(
    [
      {
        id: nanoid(),
        text: 'this is first note',
        date: '22|06|2023'
      },
      {
        id: nanoid(),
        text: 'this is second note',
        date: '23|06|2023'
      },
      {
        id: nanoid(),
        text: 'this is third note',
        date: '23|06|2023'
      },
      {
        id: nanoid(),
        text: 'this is fourth note',
        date: '24|06|2023'
      }
    ]
  )

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    if (savedNotes) {
      setNote(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'notes-app-data',
      JSON.stringify(note)
    );
  }, [note])

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...note, newNote];
    setNote(newNotes);
  }

  const DeleteNote = (id) => {
    const newNotes = note.filter((note) => note.id !== id);
    setNote(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header darkMode={setDarkMode} />
        <Search search={setSearchText} />
        <NotesList
          note={
            note.filter((note) => note.text.toLowerCase().includes(searchText))
          }
          addNote={AddNote}
          deleteNote={DeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
