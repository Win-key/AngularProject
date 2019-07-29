import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router} from "@angular/router";

import { Recipe } from './../recipe.model';

import { ShoppingListService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;

  constructor(private shoppingListService :  ShoppingListService,
              private route : ActivatedRoute,
              private recipeService : RecipeService,
              private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param : Params)=> {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
    
  }

  toShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.toShoppingList(ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo : this.route});
  }

}
