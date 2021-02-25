import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("chicken breast",2),
    new Ingredient("red bell pepper",1),
    new Ingredient("yello bell pepper",1),
    new Ingredient("green bell pepper",1),
    new Ingredient("onions",2),
    new Ingredient("spices sachet",1)

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
