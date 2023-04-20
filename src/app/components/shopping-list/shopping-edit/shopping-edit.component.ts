import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  addNewIngredients(newIngredients: Ingredient) {
    this.shoppingListService.addNewIngredients(newIngredients);
  }
}
