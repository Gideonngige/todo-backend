import { Request, Response } from "express";
import { auth } from "../config/firebaseClient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

// Sign up user
export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    res.status(201).json({ uid: user.uid, email: user.email, token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Sign in user
export const signinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    res.status(200).json({ uid: user.uid, email: user.email, token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
