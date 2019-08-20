import { AuthGaurdService } from './auth/auth-gaurd.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRouters : Routes = [
    {path : '', redirectTo : 'sign-in', pathMatch : 'full'},
    {path : 'recipe', component : RecipesComponent,
     canActivate : [AuthGaurdService],
     children : [
        { path : '' , component : RecipeStartComponent },
        { path : 'new' , component : RecipeEditComponent },
        { path : ':id' , component : RecipeDetailComponent },
        { path : ':id/edit' , component : RecipeEditComponent }
    ]},
    {path : 'shopping-list', component : ShoppingListComponent, canActivate : [AuthGaurdService],},
    {path : 'sign-up', component : SignUpComponent},
    {path : 'sign-in', component : SignInComponent},
    {path: '**', redirectTo : 'recipe' }
];

@NgModule({
    imports : [RouterModule.forRoot(appRouters)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}