import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Output() selectedRecipe : Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelectingRecipe(recipe : Recipe){
    this.selectedRecipe = recipe;
  }

}
