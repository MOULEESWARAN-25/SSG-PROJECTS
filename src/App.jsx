import ToDoList from "./ToDoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<ToDoList />}/>
      </Routes>
    </BrowserRouter>
  );
}
