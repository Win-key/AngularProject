import { Ingredient } from './../../shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action{
    readonly type = ADD_INGREDIENT;
    constructor(public payload : Ingredient[]){}
}

export type ShoppingListActions = AddIngredient;