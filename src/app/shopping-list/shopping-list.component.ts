import { Component, OnInit } from '@angular/core';
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from './shopping-list.service';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  //ingredients : Ingredient[];
  shoppingListState : Observable<{ingredients : Ingredient[]}>;
  constructor(private shoppingListService : ShoppingListService,
              private store : Store<{shoppingList : {ingredients : Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    /*this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredients : Ingredient[])=>this.ingredients= ingredients
    );*/
  }

  onShopEditEmitter(ingredient : Ingredient){
    this.shoppingListService.putIngredient(ingredient);
  }

  editIngredients(index : number){
    this.shoppingListService.shoppingEditSubject.next(index);
  }

}
