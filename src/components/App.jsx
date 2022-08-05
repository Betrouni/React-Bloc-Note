import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes((prevValues) => {
      return [...prevValues, newNote];
    });
    console.log(newNote);

  }

  function deleteNote(id){
    setNotes( (prevValues)=>{
      return prevValues.filter(  (item,i) => {return id !== i} )
    } )

  }

  function createNote(data,i) {
    let {title, content} = data
    return <Note deleteNote={deleteNote} id={i} key={i} title={title} content={content} />
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((notesItem,index)=>createNote(notesItem,index))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
