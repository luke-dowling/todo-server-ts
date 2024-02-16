import { Router } from "express";
import {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller";
import { validateAddTodo, validateUpdateTodo } from "../middleware/validation";

const todoRouter = Router();

todoRouter.route("/").get(getTodos).post(validateAddTodo, addTodo);

todoRouter
  .route("/:id")
  .get(getTodo)
  .patch(validateUpdateTodo, updateTodo)
  .delete(deleteTodo);

export { todoRouter };
