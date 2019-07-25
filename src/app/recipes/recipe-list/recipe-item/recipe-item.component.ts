import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe : Recipe;
  @Output() recipeItemEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeItemSelected(recipe: Recipe){
    this.recipeItemEmitter.emit(recipe);
  }

}
