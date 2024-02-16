import express, { Express, Request, Response, NextFunction } from "express";
import "./global.types";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

import { todoRouter } from "./routes/todo.router";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
  res.json({
    routes: {
      todos: "localhost:8000/todos",
    },
  });
});

app.use("/todos", todoRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  const err: IError = new Error(`Route not found for path: ${req.path}`);
  err.status = 404;
  next(err);
});

app.use(
  (err: IError, req: Request, res: Response, next: NextFunction): void => {
    if (err.status === 404) {
      res.sendStatus(err.status);
    } else {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

export default app;
