import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import knex from "./db/knex";
import { Model } from "objection";

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

export default app;
