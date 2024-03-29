import { Component, OnInit } from '@angular/core';
import { iProducts } from '../../models/products';
import { iContProducts } from '../../models/cont-products';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsArr: iProducts[] = [];

  preferiti: iProducts[] = [];

  carrello: iProducts[] = []

  constructor(private productSvc: ShopService) {}

  ngOnInit() {
    this.productSvc.getAll().subscribe((response: any) => {

        this.productsArr = response.products;
        console.log(this.productsArr);
    });
  }

  addToFavorites(product: iProducts) {
    this.productSvc.addToFavorites(product);
  }

  addToCart(product: iProducts) {
    this.carrello.push(product);
    console.log("Prodotti nel carrello:", this.carrello);
  }
}
