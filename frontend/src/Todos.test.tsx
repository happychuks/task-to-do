import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Todos from "./components/Todos";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { client } from "./utils/client";

// Mock the react-query hooks
jest.mock("react-query");

const queryClient = new QueryClient();

test("renders Todos component", async () => {
  // Mock the useQuery hook response
  const mockTodos = [
    {
      id: "1",
      description: "First Dump",
      done: true,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
    },
    {
      id: "2",
      description: "Second Dump",
      done: false,
      createdAt: "2022-01-02",
      updatedAt: "2022-01-02",
    },
  ];
  (useQuery as jest.Mock).mockReturnValueOnce({
    isLoading: false,
    data: mockTodos,
  });

  // Mock the useMutation hooks
  const mockToggleMutation = jest.fn();
  const mockDeleteMutation = jest.fn();
  (jest.requireMock("react-query") as any).useMutation.mockReturnValueOnce([
    mockToggleMutation,
  ]);
  (jest.requireMock("react-query") as any).useMutation.mockReturnValueOnce([
    mockDeleteMutation,
  ]);

  render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Todos />
        </ChakraProvider>
      </QueryClientProvider>
    </Router>
  );

  // Check if the Todos component renders without crashing
  const firstTodo = screen.getByText("First Dump");
  const secondTodo = screen.getByText("Second Dump");
  expect(firstTodo).toBeInTheDocument();
  expect(secondTodo).toBeInTheDocument();

  // Simulate clicking on the toggle icon
  fireEvent.click(screen.getByTestId("toggle-icon-1"));
  expect(mockToggleMutation).toHaveBeenCalledTimes(1);

  // Simulate clicking on the delete icon
  fireEvent.click(screen.getByTestId("delete-icon-2"));
  expect(mockDeleteMutation).toHaveBeenCalledTimes(1);
});
