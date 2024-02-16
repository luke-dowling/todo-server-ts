import { NextFunction, Request, Response } from "express";

export const validateTodo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text } = req.body;
  if (!text.trim()) {
    const err: IError = new Error("Text is required in the request.");
    err.status = 400;
    return next(err);
  }
  next();
};
