import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NewTodo from "./components/NewTodo";
import { QueryClient, QueryClientProvider } from "react-query";
import { client } from "./utils/client";

// Mock the react-query hooks
jest.mock("react-query");

const queryClient = new QueryClient();

test("renders NewTodo component", async () => {
  // Render the NewTodo component within the necessary providers
  render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <NewTodo />
        </ChakraProvider>
      </QueryClientProvider>
    </Router>
  );

  // Check if the NewTodo component renders without crashing
  const taskDescriptionText = screen.getByText("Task Description");
  expect(taskDescriptionText).toBeInTheDocument();

  // Simulate typing into the input field
  const inputElement = screen.getByRole("textbox", { name: /Description/i });
  fireEvent.change(inputElement, { target: { value: "New Task" } });
  expect(inputElement).toHaveValue("New Task");

  // Simulate clicking on the add button
  const addButton = screen.getByRole("button", { name: /Add new Task/i });
  fireEvent.click(addButton);

  // Check if the mutation is called with the correct payload
  expect(client.post).toHaveBeenCalledWith("todos", {
    todo: { description: "New Task" },
  });
});
