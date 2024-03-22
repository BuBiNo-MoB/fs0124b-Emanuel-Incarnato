import { Component } from '@angular/core';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss'],
})
export class FiatComponent {
  cars: iCars[] = [];
  brandLogo!: string;
  brand!: string;

  ngOnInit(): void {
      this.getAutos();
  }

  getAutos() {
      fetch('../../../assets/db.json')
          .then(response => response.json())
          .then((cars:iCars[]) => {
              this.cars = cars.filter((car) => car.brand === 'Fiat');
              if (this.cars.length > 0) {
                  this.brandLogo = this.cars[0].brandLogo;
                  this.brand = this.cars[0].brand;
              }
          })
  }
}
