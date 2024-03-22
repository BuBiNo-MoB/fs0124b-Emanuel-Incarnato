import { Injectable } from '@angular/core';
import { iCars } from './models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  getAllCars():Promise<iCars[]>{
    return fetch ('../assets/db.json')
    .then(car => car.json())
    .then((cars:iCars[]) => cars)
  }
  getActiveCars():Promise<iCars[]>{
    return this.getAllCars()
    .then(article => article.filter(p => p.available))
  }

  getInactiveCars():Promise<iCars[]>{
    return this.getAllCars()
    .then(article => article.filter(p => p.available))
  }
}
