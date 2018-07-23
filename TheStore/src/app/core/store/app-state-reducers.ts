import { ActionReducerMap, ActionReducer, combineReducers } from "@ngrx/store";
import { IAppState } from "./app-state";
import { ProductsReducer } from "./products-state/products-reducers";

export const reducers: ActionReducerMap<IAppState> = {
  productsState: ProductsReducer
};


