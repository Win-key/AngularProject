import { RecipeService } from './recipe.service';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {

  @Output() selectedRecipe : Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipeEmitter.subscribe(
      (recipe : Recipe)=>this.selectedRecipe = recipe
    );
  }

  onSelectingRecipe(recipe : Recipe){
    this.selectedRecipe = recipe;
  }

}
