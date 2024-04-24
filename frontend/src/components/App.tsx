import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/new" element={<NewTodo />} />
          <Route path="/" element={<Todos />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
