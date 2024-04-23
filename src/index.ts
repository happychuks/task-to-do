import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import knex from "./db/knex";
import { Model } from "objection";
import todos from "./routes/todo";

Model.knex(knex); //this pass knex config into the model instance

const app = express();
const port = 4000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server ready and running at http://localhost:${port}`);
});

app.get("/", (_, res) => {
  res.send("Everything is good!");
});

const router = express.Router();

app.use("/todos", todos);

export default app;
