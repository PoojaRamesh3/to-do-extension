import express from "express";
import { addTodo } from "../controller/todo-controller.js";
const route = express.Router();

route.post("/to-dos", addTodo);

export default route;
