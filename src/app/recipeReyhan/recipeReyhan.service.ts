import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipeReyhan/recipeReyhan.model';
import { Ingredient } from '../shared/ingredientReyhan.model';
import { ShoppingListService } from '../shopping-list-reyhan/shopping-list.service';
@Injectable()
export class RecipeReyhanService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new Recipe('Burger','A hamburger with a rim of lettuce sitting on a black plate againts a black background',
  'http://www.burgerking.com.my/upload/image/Category/2/double-bbq-beefacon-thumb.jpg', [
    new Ingredient('meal',1),
    new Ingredient('tomato',2)
  ]),
    new Recipe('Special fried rice','Fried rice is a dish of cooked rice that has been stir-fried in a work a'+
    'frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten',
    '../src/app/img/segogoreng.jpg',[
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]) {
    this.slsService.addIngredient(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
constructor(private slsService: ShoppingListService) { }

}
