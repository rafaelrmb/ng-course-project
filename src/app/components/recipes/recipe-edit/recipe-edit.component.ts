import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  isEditing: boolean = false;
  newRecipeForm!: FormGroup;
  editRecipeName!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.newRecipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [''],
      ingredients: this.fb.array([], Validators.required),
    });

    this.route.params.subscribe((params: Params) => {
      this.isEditing = params['name'] != null;

      if (this.isEditing) {
        this.fillFormOnEdit(params);
        this.editRecipeName = params['name'];
      }
    });
  }

  createNewRecipe() {
    const newRecipe: Recipe = {
      name: this.newRecipeForm.value.name,
      description: this.newRecipeForm.value.description,
      imagePath:
        this.newRecipeForm.value.imagePath || 'https://placehold.co/600x400',
      ingredients: this.newRecipeForm.value.ingredients as Ingredient[],
    };

    this.recipeService.addNewRecipe(newRecipe);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  editRecipe() {
    this.recipeService.updateRecipe(
      this.editRecipeName,
      this.newRecipeForm.value
    );

    this.isEditing = false;
    this.router.navigate(['/recipes']);
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

  removeIngredient(index: number) {
    (this.newRecipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  get ingredientControls() {
    return (this.newRecipeForm.get('ingredients') as FormArray).controls;
  }

  fillFormOnEdit(params: Params) {
    const selectedRecipe = this.recipeService.getRecipesByName(params['name']);

    selectedRecipe.ingredients.forEach(() => {
      this.addIngredients();
    });

    this.newRecipeForm.setValue({
      name: selectedRecipe.name,
      description: selectedRecipe.description,
      imagePath: selectedRecipe.imagePath,
      ingredients: selectedRecipe.ingredients,
    });
  }
}
