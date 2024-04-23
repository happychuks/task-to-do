import React from "react";
import { Box, Flex, Text, Icon, IconButton } from "@chakra-ui/react";
import { FiCheckSquare, FiSquare, FiTrash, FiPlus } from "react-icons/fi";

const tempTodos = [
  {
    description: "First Dump",
    done: true,
  },
  {
    description: "Second Dump",
    done: false,
  },
];
const Todos: React.FC = () => {
  return (
    <Box mt="24" mx="auto">
      <Flex alignItems="center" justifyContent="center" pos="relative">
        <Box px="8" pt="6" pb="10" bgColor="gray.light" borderRadius="16px">
          {tempTodos.map((todo) => (
            <Flex alignItems="center" justifyContent="space-between">
              <Icon
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
};

export default Todos;
