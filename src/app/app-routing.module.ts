import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeReyhanComponent } from './recipeReyhan/recipeReyhan.component';
import { ShoppingListReyhanComponent } from'./shopping-list-reyhan/shopping-list-reyhan.component';
import { RecipeStartComponent } from './recipeReyhan/recipe-start/recipe-start.component';
import { RecipeDetailReyhanComponent } from './recipeReyhan/recipe-detail-reyhan/recipe-detail-reyhan.component';
import { RecipeEditComponent } from './recipeReyhan/recipe-edit/recipe-edit.component';
const appRoutes: Routes = [
  { path:'',redirectTo:'/recipes',pathMatch:'full' },
  { path:'recipes',component:RecipeReyhanComponent,children:[
    { path:'',component:RecipeStartComponent},
    { path:'new',component:RecipeEditComponent },
    { path:':id',component:RecipeDetailReyhanComponent },
    { path:':id/edit',component:RecipeEditComponent },
  ] },
  { path:'shopping-list-reyhan',component:ShoppingListReyhanComponent },
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})

export class AppRoutingModule{}
