import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', loadChildren: './+products/products.module#ProductsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
