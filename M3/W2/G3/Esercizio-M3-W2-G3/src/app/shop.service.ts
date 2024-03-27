import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducts } from './models/products';
import { iContProducts } from './models/cont-products';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  apiUrl:string = 'https://dummyjson.com/products';

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<iContProducts[]>(this.apiUrl)
  }
}
