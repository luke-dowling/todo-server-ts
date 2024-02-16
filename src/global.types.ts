interface IError extends Error {
  status?: number;
}

interface ITodo {
  text: String;
  completed: Boolean;
}
