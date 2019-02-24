import mongoose from "mongoose";
import { Recipe, Ingredient, Direction } from "./../interfaces/Recipe";

export interface RecipeModel extends Recipe, mongoose.Document { }

export let RecipeSchema: mongoose.Schema = new mongoose.Schema ({
    createdAt: Date,
    ingredients: Array,
    prepTime: String,
    cookTime: String,
    name: String,
    image: String,
    directions: Array,
    notes: String,
    links: Array,
    categories: String,
    yield: String,
    level: String
});

const OneRecipe = mongoose.model("Recipe", RecipeSchema);
export default OneRecipe;