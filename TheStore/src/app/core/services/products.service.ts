import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Repository } from '../repository/Repository';
import { API_PRODUCTS } from '../settings/settings';
import { IProductModel } from '../contracts/IProductModel';
import { IProductsState } from '../store/products-state/products-state';
import { Store } from '@ngrx/store';
import { GetProductsAction, ShakeStoreAction } from '../store/products-state/products-actions';
import { ProductsSelector } from '../store/selectors/products-selectors';
import { IAppState } from '../store/app-state';
import { ServerResponseModel } from '../models/ServerResponseModel';
import { IProductFilterModel } from '../contracts/IProductFilterModel';
@Injectable()
export class ProductsService extends Repository<IProductModel> {

  constructor(http: HttpClient, private store: Store<IAppState>) {
    super(http);
    this.API = API_PRODUCTS;
  }

  createUrlParams(item: IProductFilterModel): HttpParams {
    let params = new HttpParams()
      .append('name', '' + item.Name);
    return params;
  }

  public GetProductsFromStore() {
  let subscription =  this.getAll().subscribe((x: ServerResponseModel) => {
    this.store.dispatch(new GetProductsAction(x.body));
    subscription.unsubscribe();
    });
    return this.store.select(ProductsSelector.GetProducts)
  }

 


  public GetProductsByName(name: string) {
   let subscription = this.getAll(this.createUrlParams({ Name: name })).subscribe((x: ServerResponseModel) => {
     this.store.dispatch(new GetProductsAction(x.body));
     subscription.unsubscribe();
    });
  }
}
