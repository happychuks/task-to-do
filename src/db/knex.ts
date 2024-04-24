import knex from "knex";
import { knexSnakeCaseMappers } from "objection"; //to normalize varable names to snakeCase
require("dotenv").config();

const config = require("./config");

const environment = process.env.NODE_ENV || "development";

export default knex({ ...config[environment], ...knexSnakeCaseMappers() });
