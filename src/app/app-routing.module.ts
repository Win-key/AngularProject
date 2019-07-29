import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRouters : Routes = [
    {path : '', redirectTo : 'recipe', pathMatch : 'full'},
    {path : 'recipe', component : RecipesComponent, children : [
        { path : '' , component : RecipeStartComponent },
        { path : 'new' , component : RecipeEditComponent },
        { path : ':id' , component : RecipeDetailComponent },
        { path : ':id/edit' , component : RecipeEditComponent }
    ]},
    {path : 'shopping-list', component : ShoppingListComponent},
    {path: '**', redirectTo : 'recipe' }
];

@NgModule({
    imports : [RouterModule.forRoot(appRouters)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}