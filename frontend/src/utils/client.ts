import axios from "axios";

//communication with the server
export const client = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
});
