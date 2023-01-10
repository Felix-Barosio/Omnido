import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/todos" element={<TodoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;

