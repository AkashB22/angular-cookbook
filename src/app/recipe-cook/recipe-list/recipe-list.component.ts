import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe(
      "test", "This is a test recipe", "./assets/images/test.png"
    ),
    new Recipe(
      "test1", "This is a test1 recipe", "./assets/images/test.png"
    )
  ];
  @Output()selectedRecipeFromList: EventEmitter<Recipe> = new EventEmitter<Recipe>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe){
    this.selectedRecipeFromList.emit(recipe); 
  }

}
