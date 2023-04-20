import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  updatedList = new EventEmitter<Ingredient[]>();

  private ingredientsList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  addNewIngredients(newIngredients: Ingredient) {
    this.ingredientsList.push(newIngredients);
    this.updatedList.emit(this.ingredientsList.slice());
  }

  getIngredientsList() {
    return this.ingredientsList.slice();
  }
}
