import { ProductsActions, MY_PRODUCTS, SHAKE_STORE } from "./products-actions";
import { IProductsState } from "./products-state";

const initialState: IProductsState = {
  products: [],
  shakeStore: false
}

export function ProductsReducer(state = initialState, action: ProductsActions): IProductsState {
  switch (action.type) {
    case MY_PRODUCTS: {
      state.products = action.payload;
      return Object.assign({}, state);
    }
    case SHAKE_STORE: {
      state.shakeStore = action.payload;
      console.log(state);
      return Object.assign({}, state);
    }
    default: {
      return state;
    }
  }
} 
