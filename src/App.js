import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import NoteCreate from './Components/NoteCreate';
import Note from './Components/Note';


const App = () => {

  const [addNote, setAddNote] = useState([]);

  let getNote = (gnote) => {

    setAddNote((oldNote) => {
      return ([...oldNote, gnote])
    })

  }

  let deleteItem = (id) => {
    setAddNote((allNote) =>
      allNote.filter((value, index) => {
        return (index !== id);
      })
    )
  }


  return (
    <>

      <Header />

      <NoteCreate getNoteFromNoteCreate={getNote} />

      <div className="itmnodes">
        {
          addNote.map((value, index) => {

            return (
              <Note
                key={index}
                id={index}
                title={value.title}
                content={value.content}
                removeNote={deleteItem}
              />
            );
          })
        }
      </div>

    </>
  );
}

export default App;
