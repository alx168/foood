import { Request, Response } from 'express'
import OneRecipe from './../models/Recipe'


export let allRecipes = (req: Request, res: Response) => {
    let Recipes = OneRecipe.find((err: any) => {
      if (err) {
        res.send("Error!");
      } else {
        res.send(Recipes);
      }
    })
  }

  export let getRecipe = (req: Request, res: Response) => {
    let Recipes = OneRecipe.findById(req.params.id, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(Recipes)
      }
    })
  }

  export let deleteRecipe = (req: Request, res: Response) => {
    let Recipe = OneRecipe.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err)
      } else {
        res.send("Succesfully Deleted Recipe");
      }
    })
  }

  export let updateRecipe = (req: Request, res: Response) => {
    console.log(req.body);
    let book = OneRecipe.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully updated book!");
      }
    });
  
  }

  export let addRecipe = (req: Request, res: Response) => {
    let Recipe = new OneRecipe(req.body);
  
    Recipe.save((err: any) => {
      if (err) {
        res.send(err)
      } else {
        res.send(Recipe)
      }
    })
  }

