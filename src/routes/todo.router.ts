import { Router } from "express";
import { getTodos, addTodo, getTodo } from "../controller/todo.controller";
import { validateTodo } from "../middleware/validation";

const todoRouter = Router();

todoRouter.route("/").get(getTodos).post(validateTodo, addTodo);

todoRouter.route("/:id").get(getTodo);

export { todoRouter };
