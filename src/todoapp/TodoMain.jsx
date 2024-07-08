import { PenBox, Trash2, Save, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TodoMain({ store, setStore }) {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleInput = () => {
    if (inputValue.trim() === "") {
      alert("Empty field is not allowed...");
    } else if (inputValue.trim().length < 3) {
      alert("Write a valid input");
    } else {
      setValues([inputValue, ...values]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newValues = values.filter((_, i) => i !== index);
    const oldValues = values.filter((_, i) => i === index);
    console.log(index);
    setValues(newValues);
    setStore([oldValues, ...store]);
  };

  const handleEditStart = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleEditSave = () => {
    const newValues = values.map((value, index) =>
      index === editIndex ? editValue : value
    );
    setValues(newValues);
    setEditIndex(null);
    setEditValue("");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="TodoApp">
      <h2>Todo App</h2>
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter a todo here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <button onClick={handleInput}>Add</button>
      </div>
      <ul className="Items-list">
        {values.length === 0 ? (
          <div className="empty-field">
            <h3>ToDo List Item is empty, Enjoy your day!!!</h3>
          </div>
        ) : (
          values.map((value, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    className="editInput"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <div style={{ marginTop: "-10px" }}>
                    <button onClick={handleEditSave}>
                      <Save color="green" />
                    </button>
                    <button onClick={handleEditCancel}>
                      <X color="red" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p><input type="checkbox"  style={{marginRight:'10px'}}/>{value}</p>
                  <div>
                    <button onClick={() => handleEditStart(index, value)}>
                      <PenBox color="orange" />
                    </button>
                    <button onClick={() => handleDelete(index)}>
                      <Trash2 color="red" />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
      <Link className="deleted-items-link" to="/deleted-items">
        Deleted Items
      </Link>
    </div>
  );
}

export default TodoMain;
