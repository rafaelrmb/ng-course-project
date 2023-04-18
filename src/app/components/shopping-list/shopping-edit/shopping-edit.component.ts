import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output('newIngredients') newIngredients = new EventEmitter<Ingredient>();

  addIngredient(name: string, amount: string) {
    this.newIngredients.emit({
      name: name,
      amount: +amount,
    });
  }
}
