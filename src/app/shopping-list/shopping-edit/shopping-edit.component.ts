import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from "src/app/shared/ingredient.model";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameValue') name : ElementRef;
  // @ViewChild('amountValue') amount : ElementRef;
  @ViewChild('editForm') editForm : NgForm;
  shopEditSubscription : Subscription;
  editIngredient : Ingredient;
  editMode : boolean = false;
  editIndex : number;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.shopEditSubscription = this.shoppingListService.shoppingEditSubject.subscribe(
      (index : number)=>{
        this.editMode = true;
        this.editIndex = index;
        this.editIngredient = this.shoppingListService.getIngredient(this.editIndex);
        this.editForm.setValue({
          name : this.editIngredient.name,
          amount : this.editIngredient.amount
        });
      }
    );
  }

  onAdd(formRef : NgForm){
    console.log(formRef);
    this.shoppingListService.putIngredient(new Ingredient(formRef.form.value.name, parseInt(formRef.form.value.amount)));
    this.editMode = false;
    formRef.reset();
  }

  onUpdate(formRef : NgForm){
    this.shoppingListService.updateIngredient(this.editIndex, new Ingredient(formRef.form.value.name, parseInt(formRef.form.value.amount)));
    this.editMode = false;
    formRef.reset();
  }
  onClear(){
    this.editMode = false;
    this.editForm.reset();
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.shopEditSubscription.unsubscribe();
  }
}
