import { NgModule } from '@angular/core';
import {CategoriesComponent} from './category/categories/categories.component';
import {CategoryDetailsComponent} from './category/category-details/category-details.component';
import {RouterModule} from '@angular/router';

const routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'category-details/:id', component: CategoryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
