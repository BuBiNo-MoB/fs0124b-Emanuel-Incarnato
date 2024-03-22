import { Component } from '@angular/core';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  cars: iCars[] = [];
  rndCars: iCars[] = [];
  logos: string[] = [];
  brandLogo!: string;
  brand!: string;

  ngOnInit(): void {
      this.getAutos();
  }

  getAutos() {
      fetch('../../../assets/db.json')
          .then(response => response.json())
          .then((cars:iCars[]) => {
              this.cars = cars.filter((car) => car.brand === 'Ford');
              if (this.cars.length > 0) {
                  this.brandLogo = this.cars[0].brandLogo;
                  this.brand = this.cars[0].brand;
              } else {
                  console.error('No Ford cars.');
              }
          })
  }
}
