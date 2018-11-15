import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredientReyhan.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit-reyhan',
  templateUrl: './shopping-edit-reyhan.component.html',
  styleUrls: ['./shopping-edit-reyhan.component.css']
})
export class ShoppingEditReyhanComponent implements OnInit {

  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  // @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.slsService.addIngredients(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
