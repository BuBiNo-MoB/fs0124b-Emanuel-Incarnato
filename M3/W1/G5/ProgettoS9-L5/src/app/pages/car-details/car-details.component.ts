import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: iCars | undefined;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const carId = +params['id'];

      fetch('../../../assets/db.json')
        .then(cars => cars.json())
        .then(data => {
          const cars: iCars[] = data
          this.car = cars.find(car => car.id === carId);
        })
        .catch(error => console.error('Error fetching car details:', error));
    });
  }
}
