import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'glp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent  {

  constructor(private productService: ProductService) {

  }

  public searchProducts(name: string) {
    this.productService.GetProductsByName(name);
  }

}

