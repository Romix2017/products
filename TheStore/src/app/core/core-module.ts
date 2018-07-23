import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app-state-reducers';
import { ProductsService } from './services/products.service';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [HttpClientModule, StoreModule.forRoot(reducers)],
  providers: [ProductsService, ProductService],
  exports: [StoreModule]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}
