import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  addedItems = [];
  noItems = [];
  totalPrice = 0;
  constructor() { }

  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    this.cartItems.map(item => {
      if (item.addtocart > 0) {
        item.totalprice = item.Amount * item.addtocart;
        this.totalPrice = this.totalPrice + item.totalprice;
        this.addedItems.push(item);
      } else {
        this.noItems.push(item);
      }

    });
  }

}
