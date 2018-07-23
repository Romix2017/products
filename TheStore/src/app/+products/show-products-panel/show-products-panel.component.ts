import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProductModel } from '../../core/contracts/IProductModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'glp-show-products-panel',
  templateUrl: './show-products-panel.component.html',
  styleUrls: ['./show-products-panel.component.css'],
})

export class ShowProductsComponent implements OnInit {

  public productsCollection$: Observable<IProductModel[]>;
  constructor(private productsService: ProductsService) {

  }

  public ngOnInit() {
    this.productsCollection$ =
      this.productsService.GetProductsFromStore();
  }
}
