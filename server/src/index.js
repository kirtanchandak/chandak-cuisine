import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://kirtanchandak:si6cnFfs5CKEUbr1@cornellblog.4c5hnap.mongodb.net/recipies?retryWrites=true&w=majority"
);

app.listen(5000, () => console.log("Server is running on port 5000"));
