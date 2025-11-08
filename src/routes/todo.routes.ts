import { Router } from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todo.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

router.get("/", verifyToken, getTodos);
router.post("/", verifyToken, createTodo);
router.put("/:id", verifyToken, updateTodo);
router.delete("/:id", verifyToken, deleteTodo);

export default router;
