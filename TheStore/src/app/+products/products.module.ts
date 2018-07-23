import { ProductsRoutingModule } from "./products-routing.module";
import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ShowProductsComponent } from "./show-products-panel/show-products-panel.component";
import { ProductsComponent } from "./products.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ProductsRoutingModule,
    NgSelectModule,
    FormsModule,
    CommonModule
  ],
  exports: [
  ],
  declarations: [
    SearchBarComponent,
    ShowProductsComponent,
    ProductsComponent
  ],
  providers: [
  ],
  bootstrap: [ProductsComponent],
})

export class ProductsModule {
}
