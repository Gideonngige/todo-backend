import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import todoRoutes from "./routes/todo.routes";

dotenv.config();
const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
