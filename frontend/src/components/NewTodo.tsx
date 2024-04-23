import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const NewTodo: React.FC = () => {
  const [description, setDescription] = useState("");
  return (
    <Box mt="24">
      <Box w="384px" mx="auto">
        <Text fontSize="18px" fontWeight="bold" color="gray.default">
          Task Description
        </Text>

        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mt="4"
          name="Description"
          borderColor="gray.light"
          borderWidth="2px"
          focusBorderColor="gray.light_dark"
        ></Input>

        <Button
          mt="6"
          color="gray.dark"
          bgColor="yellow.default"
          _hover={{ bgColor: "yellow.dark" }}
          _active={{ bgColor: "yellow.light" }}
        >
          Add new Task
        </Button>
      </Box>
    </Box>
  );
};

export default NewTodo;
