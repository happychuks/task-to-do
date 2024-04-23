import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTodo from "./newTodo";
import Todos from "./Todos";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/new" element={<NewTodo />} />
        <Route path="/" element={<Todos />} />
      </Routes>
    </Router>
  );
};

export default App;
