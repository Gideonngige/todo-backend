import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  userId: string;
  title: string;
  completed: boolean;
}

const TodoSchema = new Schema<ITodo>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>("Todo", TodoSchema);
