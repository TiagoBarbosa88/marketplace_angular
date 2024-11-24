import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardProductComponent } from './components/card-product/card-product.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  // {path:'/list-products', component: CardProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
