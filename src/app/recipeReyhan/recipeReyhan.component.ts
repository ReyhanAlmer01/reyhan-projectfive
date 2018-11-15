import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeReyhan.model';
import { RecipeReyhanService } from './recipeReyhan.service';
@Component({
  selector: 'app-recipeReyhan',
  templateUrl: './recipeReyhan.component.html',
  styleUrls: ['./recipeReyhan.component.css'],
  providers:[RecipeReyhanService]
})
export class RecipeReyhanComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeReyhanService: RecipeReyhanService) { }

  ngOnInit() {
    this.recipeReyhanService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
