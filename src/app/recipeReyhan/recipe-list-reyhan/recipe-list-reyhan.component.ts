import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';
import { RecipeReyhanService } from '../recipeReyhan.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list-reyhan',
  templateUrl: './recipe-list-reyhan.component.html',
  styleUrls: ['./recipe-list-reyhan.component.css']
})
export class RecipeListReyhanComponent implements OnInit {

  // @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  // property:class recipeReyhan

  constructor(private recipeReyhanService:RecipeReyhanService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeReyhanService.getRecipes();
  }

  // onRecipeSelected(recipeReyhan:Recipe){
  //   this.recipeWasSelected.emit(recipeReyhan);
  // }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
