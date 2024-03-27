import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducts } from './models/products';
import { iContProducts } from './models/cont-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  apiUrl:string = 'https://dummyjson.com/products';

  private preferiti: iProducts[] = [];

  constructor(private http:HttpClient){}

  getAll(): Observable<iContProducts[]> {
    return this.http.get<iContProducts[]>(this.apiUrl);
  }

  addToFavorites(product: iProducts) {
    this.preferiti.push(product);
  }

  getPreferiti(): Observable<iProducts[]> {
    return of(this.preferiti);
  }
}
