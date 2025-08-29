import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("https://notesrepo-1.onrender.com/notes")
      .then((res) => setNotes(res.data));
  }, []);

  const addNote = async () => {
    const res = await axios.post("https://notesrepo-1.onrender.com/notes", {
      text,
    });
    setNotes([...notes, res.data]);
    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notes App</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
