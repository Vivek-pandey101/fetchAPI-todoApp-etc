import { Home, X, Cloud, ChefHat, Code2Icon, BookAudioIcon } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Sidebar({ setShowSideBar }) {
  const Sidebar = useRef();
  const handleSidebar = (e) => {
    if (Sidebar.current === e.target) {
      setShowSideBar(false);
    }
  };
  return (
    <div className="Sidebar" ref={Sidebar} onClick={handleSidebar}>
      <div className="SidebarContainer">
        <button
          className="closeSidebar SideBarButton"
          onClick={() => setShowSideBar(false)}
        >
          <X size={40} />
        </button>
        <div className="links">
          <li>
            <Home />{" "}
            <Link to="/" onClick={() => setShowSideBar(false)}>
              News
            </Link>
          </li>
          <li>
            <Cloud />{" "}
            <Link to="/whether" onClick={() => setShowSideBar(false)}>
              Whether
            </Link>
          </li>
          <li>
            <Code2Icon />{" "}
            <Link to="/fetchapi" onClick={() => setShowSideBar(false)}>
              Fetch API
            </Link>
          </li>
          <li>
            <ChefHat />{" "}
            <Link to="/header" onClick={() => setShowSideBar(false)}>
              Recipe Finder
            </Link>
          </li>
          <li>
            <BookAudioIcon />{" "}
            <Link to="/todo" onClick={() => setShowSideBar(false)}>
              ToDo App
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
