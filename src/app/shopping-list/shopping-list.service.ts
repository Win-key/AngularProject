import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {

  ingredients : Ingredient[]= [
    new Ingredient('Apples',5),
    new Ingredient('Breads',10)
  ];

  public ingredientAdded = new EventEmitter<Ingredient[]>();
  constructor() { }
  
  getIngredients(){
    return this.ingredients.slice();
  }
  putIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }
}
