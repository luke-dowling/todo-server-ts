import { NextFunction, Request } from "express";

export const satantizeTodo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todo } = req.body;
  if (todo) {
    req.body.todo = todo.trim();
  }
  next();
};
