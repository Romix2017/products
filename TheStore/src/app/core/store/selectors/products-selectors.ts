import { BaseSelectors } from "../BaseSelectors";
import { createSelector } from "@ngrx/store";

class ProductsSelectors extends BaseSelectors {

  public GetProducts = createSelector(this.ProductsState, (state) => state.products);
  public GetProductByName = (name: string) => createSelector(this.GetProducts, (products) => {
  let resultArray =  products.filter((item) => {
      let index = item.Name.toLowerCase().indexOf(name.toLowerCase())
      if (index != null) {
        return item;
      }
    })

  })
}

export const ProductsSelector = new ProductsSelectors();
