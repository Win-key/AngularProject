import { Component, OnInit } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[]= [
    new  Recipe('Grilled Chicken','Grilled Chicken with Fresh Cherry Salsa','http://picturetherecipe.com/wp-content/uploads/2019/07/Grilled-Chicken-with-Fresh-Cherry-Salsa-Featured-680x900.jpg'),
    new  Recipe('Chicken Cutlets','Chicken Cutlets by PictureTheRecipe','http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg'), 
    new  Recipe('Chutney Sandwich','Bombay Grilled Chutney Sandwich','http://picturetherecipe.com/wp-content/uploads/2018/06/Bombay-Grilled-Chutney-Sandwich-Featured-PictureTheRecipe-680x900.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
