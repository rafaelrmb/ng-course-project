import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingListForm!: FormGroup;
  editingSubscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

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

    this.editingSubscription = this.shoppingListService.editingList.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          aboutIngredient: {
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          },
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
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

  editIngredient() {
    this.shoppingListService.editIngredient(
      this.editedItemIndex,
      this.shoppingListForm.value.aboutIngredient
    );

    this.editMode = false;
    this.shoppingListForm.reset();
  }
}
