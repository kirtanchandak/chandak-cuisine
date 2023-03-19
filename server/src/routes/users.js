import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User added successfully" });
});

router.post("/login");

export { router as userRouter };
