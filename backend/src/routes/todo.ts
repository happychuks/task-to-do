import express from "express";
import { Todo } from "../db/models/Todo";

const router = express.Router();

// create a new todo router
router.post("/", async (req, res) => {
  const todo = req.body.todo;
  const newTodo = await Todo.query()
    .insert({ description: todo.description })
    .returning("*");

  res.send({ newTodo });
});

//get all todo router
router.get("/", async (req, res) => {
  const todo = await Todo.query().select().orderBy("createdAt");

  res.send({ todo });
});

export default router;
