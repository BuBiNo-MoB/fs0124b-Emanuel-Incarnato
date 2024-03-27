import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { iProducts } from '../../models/products';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {

  preferiti: iProducts[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getPreferiti().subscribe(preferiti => {
      this.preferiti = preferiti;
    });
  }
}
