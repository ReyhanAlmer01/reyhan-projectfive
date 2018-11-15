import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipeReyhan.model';
import { RecipeReyhanService } from '../../recipeReyhan.service';

@Component({
  selector: 'app-recipe-item-reyhan',
  templateUrl: './recipe-item-reyhan.component.html',
  styleUrls: ['./recipe-item-reyhan.component.css']
})
export class RecipeItemReyhanComponent implements OnInit {

  @Input() recipeReyhan:Recipe;
  @Input() index:number;
  // @Output() recipeSelected=new EventEmitter<void>();

  // constructor(private recipeReyhanService:RecipeReyhanService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.recipeReyhanService.recipeSelected.emit(this.recipeReyhan);
  // }

}
