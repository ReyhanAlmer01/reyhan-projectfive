import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredientReyhan.model';
import { ShoppingListService } from './shopping-list.service';
// import {Ingredient} from '../shared/ingredientReyhan.model'

@Component({
  selector: 'app-shopping-list-reyhan',
  templateUrl: './shopping-list-reyhan.component.html',
  styleUrls: ['./shopping-list-reyhan.component.css']
})
export class ShoppingListReyhanComponent implements OnInit {

  ingredients:Ingredient[]
  // =[
  // //   new Ingredient('Apples', 23),
  // //   new Ingredient('Tomato', 10),
  // // ];

  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange.subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
