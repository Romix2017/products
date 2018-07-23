import { IProductModel } from "../../contracts/IProductModel";

export interface IProductsState {
  products: IProductModel[];
  shakeStore: boolean;
}
