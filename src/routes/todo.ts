import express, { Request, Response } from "express";
import { Todo } from "../db/models/Todo";

const router = express.Router();

// create a new todo router
router.post("/", async (req, res) => {
  try {
    const todo = req.body.todo;
    const newTodo = await Todo.query()
      .insert({ description: todo.description })
      .returning("*");

    res.send({ todo: newTodo });
  } catch (error: any) {
    console.error("Error in POST /:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//get all todo router
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.query().select().orderBy("created_at");

    res.send({ todos });
  } catch (error: any) {
    console.error("Error in GET /:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//get a todo router
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.query().findById(id).first();

    res.send({ todo });
  } catch (error: any) {
    console.error("Error in GET /:id:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//update an existing todo router
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = req.body.todo;
    const updatedTodo = await Todo.query()
      .update({ description: todo.description, done: todo.done })
      .where({ id })
      .returning("*")
      .first();

    res.send({ todo: updatedTodo });
  } catch (error: any) {
    console.error("Error in PATCH /:id:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//delete an existing todo router
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.query().deleteById(id);
    res.send("Todo task deleted successfully");
  } catch (error: any) {
    console.error("Error in DELETE /:id:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

export default router;
