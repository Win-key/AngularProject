import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[];

  constructor(private recipeService: RecipeService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.newRecipeEmitter.subscribe(
      ()=>this.recipes = this.recipeService.getRecipes()
    );
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }

}
