import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {

  shoppingEditSubject = new Subject<number>();

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
  toShoppingList( ingredients : Ingredient[]){
    this.ingredients = [...this.ingredients, ...ingredients];
  }

  getIngredient(index : number){
    return this.ingredients.slice()[index];
  }
  updateIngredient(index : number , newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.emit(this.getIngredients());
  }
  deleteIngredient(index : number){
    this.ingredients.splice(index, 1);
    this.ingredientAdded.emit(this.getIngredients());
  }
}
