import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  updatedList = new Subject<Ingredient[]>();
  editingList = new Subject<number>();

  private ingredientsList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  addNewIngredients(newIngredients: Ingredient) {
    if (!newIngredients || !newIngredients.name) {
      alert('Please enter a valid ingredient');
      return;
    }

    if (!newIngredients.amount || newIngredients.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (
      this.ingredientsList.find(
        (ingredient) => ingredient.name === newIngredients.name
      )
    ) {
      this.increaseIngredientAmount(newIngredients);
      return;
    }

    this.ingredientsList.push(newIngredients);
    this.updatedList.next(this.ingredientsList.slice());
  }

  getIngredientsList() {
    return this.ingredientsList.slice();
  }

  getIngredient(index: number) {
    return this.ingredientsList[index];
  }

  editIngredient(index: number, updateInfo: Ingredient) {
    this.ingredientsList[index] = updateInfo;
    this.updatedList.next(this.ingredientsList.slice());
  }

  increaseIngredientAmount(ingredient: Ingredient) {
    const index = this.ingredientsList.findIndex(
      (ingredientInList) =>
        ingredientInList.name.toLowerCase() === ingredient.name.toLowerCase()
    );
    this.ingredientsList[index].amount += ingredient.amount;
  }
}
