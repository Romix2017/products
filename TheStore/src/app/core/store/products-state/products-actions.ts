import { Action } from '@ngrx/store';
import { ProductModel } from "../../models/ProductModel";
import { IProductModel } from '../../contracts/IProductModel';

export const MY_PRODUCTS = 'GetProducts';
export const SHAKE_STORE = 'ShakeStore';

export class GetProductsAction implements Action {
  readonly type = MY_PRODUCTS;

  constructor(public payload: IProductModel[]) { }
}

export class ShakeStoreAction implements Action {
  readonly type = SHAKE_STORE;

  constructor(public payload: boolean) { }
} 

export type ProductsActions = GetProductsAction | ShakeStoreAction;
