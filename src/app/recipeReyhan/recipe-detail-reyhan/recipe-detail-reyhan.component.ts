import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';
import { RecipeReyhanService } from '../recipeReyhan.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-detail-reyhan',
  templateUrl: './recipe-detail-reyhan.component.html',
  styleUrls: ['./recipe-detail-reyhan.component.css']
})
export class RecipeDetailReyhanComponent implements OnInit {
  // @Input() 
  recipeReyhan:Recipe;
  id:number;
  constructor(private recipeReyhanService:RecipeReyhanService,
                      private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipeReyhan=this.recipeReyhanService.getRecipe(this.id)
      }
    )
  }

  onAddShoppingList(){
    this.recipeReyhanService.addIngredientsShoppingList(this.recipeReyhan.ingredient);
  }
}
