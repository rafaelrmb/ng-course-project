import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeService.updatedRecipeList.subscribe(
      (newList: Recipe[]) => (this.recipes = newList)
    );

    this.recipes = this.recipeService.getRecipes();
  }

  addNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
