import { Request, Response } from "express";
import Todo from "../models/todo.model";

export const getTodos = async (_req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = new Todo({ title });
  await newTodo.save();
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  const updated = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  res.json(updated);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).send();
};
