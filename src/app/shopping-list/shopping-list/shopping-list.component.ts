import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pomegranate', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(ingredient){
    this.ingredients.push(ingredient);
  }
}
