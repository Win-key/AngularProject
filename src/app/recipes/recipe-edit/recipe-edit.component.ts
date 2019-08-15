import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
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
              private router : Router,
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
    let imagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      let recipe : Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath    = recipe.imagePath;
      description = recipe.description;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name),
            'amount' : new FormControl(ingredient.amount)
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'description' : new FormControl(description),
      'imagePath': new FormControl(imagePath),
      'ingredients' : recipeIngredients
    });
  }

  public onSubmit(){
    console.log(this.recipeForm);
    // let recipe : Recipe = new Recipe(
    //   this.recipeForm.value["name"],
    //   this.recipeForm.value["description"],
    //   this.recipeForm.value["imgPath"],
    //   this.recipeForm.value["ingredients"]
    // );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  public onPreview() {
    this.ngxSmartModalService.getModal('imageModal').open();
  }

  public onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name'  : new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  public onRemoveIngr(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  public onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route});
  }

}
