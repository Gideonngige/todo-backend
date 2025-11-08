import { Request, Response } from "express";
import Todo from "../models/todo.model";
import { AuthRequest } from "../middleware/auth.middleware";

export const getTodos = async (req: AuthRequest, res: Response) => {
  const todos = await Todo.find({ userId: req.user?.uid });
  res.json(todos);
};

export const createTodo = async (req: AuthRequest, res: Response) => {
  const { title } = req.body;
  const newTodo = new Todo({
    userId: req.user?.uid,
    title
  });
  await newTodo.save();
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  const updated = await Todo.findOneAndUpdate(
    { _id: id, userId: req.user?.uid },
    { completed },
    { new: true }
  );
  res.json(updated);
};

export const deleteTodo = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await Todo.findOneAndDelete({ _id: id, userId: req.user?.uid });
  res.status(204).send();
};
