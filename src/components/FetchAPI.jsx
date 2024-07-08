import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";

const FetchAPI = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [newData, setNewData] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [deleteId, setDeleteId] = useState("");

  // GET Request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // POST Request
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newData,
        body: "Some body text",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        setData([...data, newPost]);
        showMessage("Data posted successfully!");
      });
    setNewData("").catch((error) =>
      console.error("Error posting data:", error)
    );
  };

  // PUT Request
  const handlePut = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updateData,
        body: "Updated body text",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setData(
          data.map((item) =>
            item.id === parseInt(updateId) ? updatedData : item
          )
        );
        showMessage("Data updated successfully!");
      });
    setUpdateId("");
    setUpdateData("").catch((error) =>
      console.error("Error updating data:", error)
    );
  };

  // DELETE Request
  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`, {
      method: "DELETE",
    }).then(() => {
      setData(data.filter((item) => item.id !== parseInt(deleteId)));
      showMessage("Data deleted successfully!");
    });
    setDeleteId("").catch((error) =>
      console.error("Error deleting data:", error)
    );
  };

  return (
    <div className="FeetchAPIContainer">
      <h1>Fetch Example</h1>
      <h2>Data</h2>
      <ul>
        {data.length === 0 ? (
          <p className="loading">
            <Settings size={40} />{" "}
          </p>
        ) : (
          data.map((item) => (
            <>
              <li
                key={item.id}
                style={{
                  fontSize: "20px",
                  marginBottom: "3px",
                  maxWidth: "1000px",
                }}
              >
                Post {item.id} - {item.title}.
              </li>
              <hr style={{ marginBottom: "8px" }} />
            </>
          ))
        )}
      </ul>

      <h2>POST Request</h2>
      <div className="Post">
        <input
          className="fetchInput"
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="New data"
        />
        <button className="button1" onClick={handlePost}>
          Post Data
        </button>
      </div>

      <h2>PUT Request</h2>
      <div className="Put">
        <input
          className="fetchInput"
          type="text"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          placeholder="ID to update"
        />
        <input
          className="fetchInput"
          type="text"
          value={updateData}
          onChange={(e) => setUpdateData(e.target.value)}
          placeholder="Updated data"
        />
        <button className="button2" onClick={handlePut}>
          Update Data
        </button>
      </div>

      <h2>DELETE Request</h2>
      <div className="Delete">
        <input
          className="fetchInput"
          type="text"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="ID to delete"
        />
        <button className="button3" onClick={handleDelete}>
          Delete Data
        </button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default FetchAPI;
