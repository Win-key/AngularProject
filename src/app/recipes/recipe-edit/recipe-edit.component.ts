import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import { Recipe } from './../recipe.model';

import { RecipeService } from './../recipe.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute,
              private recipeService : RecipeService,
              public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param : Params)=>{
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        //console.log(this.editMode);
        this.initForm();
      });
  }

  private initForm(){
    let recipeName = '';
    let description = '';
    let imgPath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      let recipe : Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imgPath    = recipe.imagePath;
      description = recipe.description;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name),
            'amount' : new FormControl(ingredient.amount)
          }));
        }
        // recipe.ingredients.forEach(element => {
        //   recipeIngredients.push(new FormGroup({
        //     'name' : new FormControl(element.name),
        //     'amount' : new FormControl(element.amount)
        //   }));
        // });
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'description' : new FormControl(description),
      'imgPath': new FormControl(imgPath),
      'ingredients' : recipeIngredients
    });
  }

  public onSubmit(){
    console.log(this.recipeForm);
  }

  /**
   * onPreview
   */
  public onPreview() {
    this.recipeService.imagePathEmitter.emit(this.recipeForm.get('imgPath').value);
    this.ngxSmartModalService.getModal('imageModal').open();
  }

}
