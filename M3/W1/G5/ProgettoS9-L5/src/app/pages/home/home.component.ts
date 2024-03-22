import { Component } from '@angular/core';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cars: iCars[] = [];
  rndCars: iCars[] = [];

  ngOnInit() {
    this.fetchCarsData();
  }

  fetchCarsData() {
    fetch('../../../assets/db.json')
      .then(response => {
        return response.json();
      })
      .then((data: iCars[]) => {
        this.cars = data;
        this.getRandomCars(2);
      })
  }

  getRandomCars(n: number) {
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * this.cars.length);
      this.rndCars.push(this.cars[randomIndex]);
    }
  }
}
