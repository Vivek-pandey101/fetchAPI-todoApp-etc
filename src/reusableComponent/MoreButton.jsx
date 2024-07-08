import React from "react";
import { Link } from "react-router-dom";

function MoreButton({ show }) {
  return (
    <div style={{ position: "relative" }}>
      {show && (
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "60px",
            display:'flex',
            flexDirection: "column",
            border: "1px solid white",
            padding: "6px 10px",
            borderRadius: "4px",
            textAlign: "end",
            color: "white",
          }}
        >
          <Link to="/deleted-items">Options</Link>
          <Link to="/deleted-items">Settings</Link>
        </div>
      )}
    </div>
  );
}

export default MoreButton;
