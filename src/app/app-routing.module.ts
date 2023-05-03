import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesRoutingModule } from './components/recipes/recipes-routing.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RecipesRoutingModule,
    ShoppingListModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
