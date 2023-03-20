import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipies.js";
import { UserModel } from "../models/Users.js";

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

// save a recipe
router.put("/", async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    console.log(err);
  }
});

//display saved recipe by a user
router.get("/savedrecipe", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    console.log(err);
  }
});

export { router as recipesRouter };