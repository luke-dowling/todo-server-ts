import { NextFunction, Request, Response } from "express";
import Todo from "../models/todo.schema";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    res.json(todo);
  } catch (error) {
    next(error);
  }
};

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { text } = req.body;

    const newTodo = new Todo({ text, completed: false });
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = req.body;
    const { id } = req.params;

    await Todo.findByIdAndUpdate(id, todo);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.json({ message: "Todo deleted." });
  } catch (error) {
    next(error);
  }
};
