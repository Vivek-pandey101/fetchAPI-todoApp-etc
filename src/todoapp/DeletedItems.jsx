import { ArchiveRestore, DeleteIcon, MoreVertical } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreButton from "../reusableComponent/MoreButton";

function DeletedItems({ store }) {
  const [deleteStore, setDeleteStore] = useState([...store]);
  const DeletePremanent = (index) => {
    const restvalues = deleteStore.filter((_, id) => id !== index);
    setDeleteStore([...restvalues]);
  };
  return (
    <>
      <div className="deleted-items">
        <h1>Deleted Items Container</h1>
        <div>
          {deleteStore.length === 0 ? (
            <div>
              <h2 style={{ color: "green", margin: "60px" }}>
                The Container is empty
              </h2>
            </div>
          ) : (
            deleteStore.map((value, index) => {
              return (
                <li key={index}>
                  <p>{value}</p>
                  <div>
                    <button>
                      <abbr title="Restore">
                        <ArchiveRestore color="green" size={30} />
                      </abbr>
                    </button>
                    <button onClick={() => DeletePremanent(index)}>
                      <abbr title="Permanent Delete">
                        <DeleteIcon color="red" size={30} />
                      </abbr>
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </div>
        <Link to="/todo">
          <p>&larr;Back to ToDo App</p>
        </Link>
      </div>
    </>
  );
}

export default DeletedItems;
