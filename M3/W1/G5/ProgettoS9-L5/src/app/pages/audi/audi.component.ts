import { Component } from '@angular/core';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  cars: iCars[] = [];
  brandLogo!: string;
  brand!: string;

  ngOnInit(): void {
      this.getCars();
  }

  getCars() {
      fetch('../../../assets/db.json')
          .then(response => response.json())
          .then((cars:iCars[]) => {
              this.cars = cars.filter((car) => car.brand === 'Audi');
              if (this.cars.length > 0) {
                  this.brandLogo = this.cars[0].brandLogo;
                  this.brand = this.cars[0].brand;
              }
          })
  }
}
