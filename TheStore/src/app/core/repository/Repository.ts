import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER } from '../settings/settings';
import { Store, Action } from '@ngrx/store';
import { GetProductsAction } from '../store/products-state/products-actions';
import { IProductModel } from '../contracts/IProductModel';

@Injectable()
export class Repository<T> {

  public API: string = "";

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getAll(params?: any): Observable<any> {
    return this._http.get(SERVER + this.API, { params: params });
  }
  saveItem(newItem: T[]): Observable<any> {
    return this._http.post(SERVER + this.API, newItem);
  }
  updateForItem(updatedItem: T[]): Observable<any> {
    return this._http.post(SERVER + this.API, updatedItem);
  }

  deleteItem(deleteItem: T, params: HttpParams): Observable<any> {
    return this._http.delete(SERVER + this.API, { params: params });
  }
}
