import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesResolverService } from 'src/app/resolvers/recipes-resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeNotFoundComponent } from './recipe-not-found/recipe-not-found.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipeNotFoundComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':name',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':name/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
