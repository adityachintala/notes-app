import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:8000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setNotes(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(API_URL, { title, content });
    setNotes([res.data, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="app">
      <h1>Notes</h1>

      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
      </form>

      {loading ? (
        <p className="status-message">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="status-message">No notes yet — add one above!</p>
      ) : (
        <div className="note-list">
          {notes.map((note) => (
            <div className="note-card" key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-footer">
                <span className="note-date">
                  {new Date(note.createdAt).toLocaleString()}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
