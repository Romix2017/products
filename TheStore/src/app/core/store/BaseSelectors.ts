import { IAppState } from "./app-state";

export class BaseSelectors {
  public ProductsState = (state: IAppState) => state.productsState;
}

export const StateSelector = new BaseSelectors();
