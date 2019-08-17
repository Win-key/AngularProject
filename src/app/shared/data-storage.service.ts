import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,
              private recipeService : RecipeService) { }

  public storeRecipeData() {
    this
        .http.put(
          'https://a-demo-on-neruppu-base.firebaseio.com/recipes.json',
          this.recipeService.getRecipes())
        .subscribe();
  }

  public getRecipeData() {
    this.http.get<Recipe[]>('https://a-demo-on-neruppu-base.firebaseio.com/recipes.json').subscribe(
      (recipes)=>{
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
