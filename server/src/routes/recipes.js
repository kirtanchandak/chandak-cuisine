import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipies.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const newRecipe = new RecipeModel(req.body);
  try {
    const response = await newRecipe.save();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

router.put("/", async (req, res) => {
  const newRecipe = new RecipeModel(req.body);
  try {
    const response = await newRecipe.save();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

export { router as recipesRouter };
