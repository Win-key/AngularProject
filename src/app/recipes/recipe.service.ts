import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe.model";

@Injectable()
export class RecipeService {

  public selectedRecipeEmitter = new EventEmitter<Recipe>();
  ingredients : Ingredient[] = [
    new Ingredient('Sugar',5),
    new Ingredient('Corn',10)
  ]
  private recipes : Recipe[]= [
    new  Recipe('Grilled Chicken','Grilled Chicken with Fresh Cherry Salsa','http://picturetherecipe.com/wp-content/uploads/2019/07/Grilled-Chicken-with-Fresh-Cherry-Salsa-Featured-680x900.jpg', this.ingredients),
    new  Recipe('Chicken Cutlets','Chicken Cutlets by PictureTheRecipe','http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg', this.ingredients), 
    new  Recipe('Chutney Sandwich','Bombay Grilled Chutney Sandwich','http://picturetherecipe.com/wp-content/uploads/2018/06/Bombay-Grilled-Chutney-Sandwich-Featured-PictureTheRecipe-680x900.jpg', this.ingredients)
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  constructor() { }
}
