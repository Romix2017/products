import { IProductModel } from '../contracts/IProductModel'
export class ProductModel implements IProductModel  {
  public Id: number;
  public Name: string;
  public Price: number;
}
