import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  templateUrl: './recipe-not-found.component.html',
  styleUrls: ['./recipe-not-found.component.css'],
})
export class RecipeNotFoundComponent {
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate([
        '/recipes',
        this.recipeService.getRecipes()[0].name,
      ]);
    }, 3000);
  }
}
