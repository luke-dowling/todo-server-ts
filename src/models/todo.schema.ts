import { Schema, model } from "mongoose";

const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
