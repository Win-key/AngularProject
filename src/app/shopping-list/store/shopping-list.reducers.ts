import { Ingredient } from 'src/app/shared/ingredient.model';
import {Action} from '@ngrx/store';
import * as shoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients : [
        new Ingredient('Apples', 10),
        new Ingredient('Breads', 20)
    ]
}

export function ShoppingListReducer( state=initialState, action : shoppingListActions.ShoppingListActions ){
    switch(action.type){
        case shoppingListActions.ADD_INGREDIENT:
                //Object.assign(state, action.payload);
            return {
                ...state,
                ingredients : [...state.ingredients, action.payload]
            };
        default :
            return state;
    }
}