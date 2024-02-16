import { NextFunction, Request, Response } from "express";
import Todo from "../models/todo.schema";

export const validateAddTodo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text } = req.body;
  if (!text) {
    const err: IError = new Error("Text is required in the request.");
    err.status = 400;
    return next(err);
  }
  next();
};

export const validateUpdateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const { text, completed } = req.body;

  if (!text && completed === undefined) {
    const err: IError = new Error(
      "Text or completed is required in the request."
    );
    err.status = 400;
    return next(err);
  }

  const todo = await Todo.findById(id);

  if (text === todo!.text || completed === todo!.completed) {
    const err: IError = new Error(
      "Text or completed can not be the same as the current todo."
    );
    err.status = 400;
    return next(err);
  }

  next();
};
