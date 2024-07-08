import { useState } from "react";
import "./App.css";
import { Menu, MoreVertical } from "lucide-react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Whether from "./components/Whether";
import FetchAPI from "./components/FetchAPI";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import TodoMain from "./todoapp/TodoMain";
import DeletedItems from "./todoapp/DeletedItems";
import MoreButton from "./reusableComponent/MoreButton";

function App() {
  const [showSidebar, setShowSideBar] = useState(false);
  const [store, setStore] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        <abbr title="More">
          <MoreVertical
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "30px",
              right: "30px",
              color: "white",
            }}
            onClick={() => setShow(!show)}
          />
        </abbr>
      </div>
      <MoreButton show={show} />
      <div className="ForSidebar">
        <button className="SideBarButton" onClick={() => setShowSideBar(true)}>
          <Menu size={40} />
        </button>
        {showSidebar && <Sidebar setShowSideBar={setShowSideBar} />}
        <div className="Container"></div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/whether" element={<Whether />} />
          <Route path="/fetchapi" element={<FetchAPI />} />
          <Route path="/header" element={<Header />} />
          <Route
            path="/todo"
            element={<TodoMain store={store} setStore={setStore} />}
          />
          <Route
            path="/deleted-items"
            element={<DeletedItems store={store} />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
