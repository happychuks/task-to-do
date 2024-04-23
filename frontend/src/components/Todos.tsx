import React from "react";
import { Box, Flex, Text, Icon, IconButton } from "@chakra-ui/react";
import { FiCheckSquare, FiSquare, FiTrash, FiPlus } from "react-icons/fi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { client } from "../utils/client";

/* const tempTodos = [
  {
    description: "First Dump",
    done: true,
  },
  {
    description: "Second Dump",
    done: false,
  },
]; */

//type definitions
type Todo = {
  id: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};
const Todos: React.FC = () => {
  const queryClient = useQueryClient();
  const { isLoading, data: todos } = useQuery<Todo[]>("todos", () =>
    client.get("todos").then((res) => res.data.todos)
  );

  //task status (done/not done) mutation
  const toggleMutation = useMutation(
    (todo: Todo) =>
      client.patch(`/todos/${todo.id}`, {
        todo: { description: todo.description, done: !todo.done },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const deleteMutation = useMutation(
    (todo: Todo) => client.delete(`/todos/${todo.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  if (isLoading) {
    return null;
  }

  if (todos) {
    return (
      <Box mt="24" mx="auto">
        <Flex alignItems="center" justifyContent="center" pos="relative">
          <Box px="8" pt="6" pb="10" bgColor="gray.light" borderRadius="16px">
            {todos.map((todo) => (
              <Flex alignItems="center" justifyContent="space-between">
                <Icon
                  onClick={() => toggleMutation.mutate(todo)}
                  fontSize="2xl"
                  color="gray.light_dark"
                  cursor="pointer"
                  _hover={{ color: "gray.dark" }}
                  as={todo.done ? FiCheckSquare : FiSquare}
                />

                <Text color="gray.dark" fontSize="xl">
                  {todo.description}
                </Text>

                <Icon
                  onClick={() => deleteMutation.mutate(todo)}
                  color="red.300"
                  _hover={{ color: "red.700" }}
                  fontSize="xl"
                  cursor="pointer"
                  as={FiTrash}
                />
              </Flex>
            ))}

            <IconButton
              color="gray.dark"
              bgColor="yellow.default"
              borderRadius="100%"
              aria-label="add-new-task"
              size="lg"
              p="4px"
              pos="absolute"
              left="calc(50% - 24px)"
              cursor="pointer"
              _hover={{ bgColor: "yellow.dark" }}
              _active={{ bgColor: "yellow.light" }}
              as={FiPlus}
            />
          </Box>
        </Flex>
      </Box>
    );
  }

  return null;
};

export default Todos;
