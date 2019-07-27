import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameValue') name : ElementRef;
  @ViewChild('amountValue') amount : ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    this.shoppingListService.putIngredient(new Ingredient(this.name.nativeElement.value, parseInt(this.amount.nativeElement.value)));
  }

}
