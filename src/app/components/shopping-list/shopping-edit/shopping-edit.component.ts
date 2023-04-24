import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  shoppingListForm!: FormGroup;

  constructor(
    private shoppingListService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.shoppingListForm = this.fb.group({
      aboutIngredient: this.fb.group({
        name: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]],
      }),
    });
  }

  addNewIngredients() {
    this.shoppingListService.addNewIngredients({
      name:
        this.shoppingListForm.value.aboutIngredient.name
          .substring(0, 1)
          .toUpperCase() +
        this.shoppingListForm.value.aboutIngredient.name
          .substring(1)
          .toLowerCase(),
      amount: this.shoppingListForm.value.aboutIngredient.amount,
    });
  }
}
