import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';

@Component({
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  isEditing: boolean = false;
  newRecipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.isEditing = params['name'] != null;
    });

    this.newRecipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [''],
      ingredients: this.fb.array([], Validators.required),
    });
  }

  createNewRecipe() {
    console.log(this.newRecipeForm);
  }

  cancelCreating() {
    this.isEditing = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addIngredients() {
    const ingredientsGroup = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
    });

    (this.newRecipeForm.get('ingredients') as FormArray).push(ingredientsGroup);
  }

  get ingredientControls() {
    return (this.newRecipeForm.get('ingredients') as FormArray).controls;
  }
}
