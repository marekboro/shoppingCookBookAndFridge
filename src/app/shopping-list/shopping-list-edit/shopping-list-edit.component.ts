import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  
@ViewChild('nameInput') nameInputReference!: ElementRef;
@ViewChild('amountInput') amountInputReference!: ElementRef;


@Output() emittedItemForShoppingList = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitAdd(){
    const newName = this.nameInputReference.nativeElement.value;
    const newAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(newName,newAmount) 
    this.emittedItemForShoppingList.emit(newIngredient);
  }
  // onSubmitAdd(nameInputReference:string,amountInputReference:number){
  //   this.emittedItemForShoppingList.emit(new Ingredient(nameInputReference,amountInputReference))
  // }

}
