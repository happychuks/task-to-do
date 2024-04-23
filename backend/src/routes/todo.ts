import express from "express";
import { Todo } from "../db/models/Todo";

const router = express.Router();

// create a new todo router
router.post("/", async (req, res) => {
  const todo = req.body.todo;
  const newTodo = await Todo.query()
    .insert({ description: todo.description })
    .returning("*");

  res.send({ todo: newTodo });
});

//get all todo router
router.get("/", async (req, res) => {
  const todos = await Todo.query().select().orderBy("created_at");

  res.send({ todos });
});

//get a todo router
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.query().findById(id).first();

  res.send({ todo });
});

//update an existing todo router
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = req.body.todo;
  const updatedTodo = await Todo.query()
    .update({ description: todo.description, done: todo.done })
    .where({ id })
    .returning("*")
    .first();

  res.send({ todo: updatedTodo });
});

//delete an existing todo router
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Todo.query().deleteById(id);
  res.send("Todo task deleted successfully");
});

export default router;
