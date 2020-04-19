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
    if (this.cartItems) {
      this.cartItems.map(item => {
        if (item.addtocart > 0) {
          item.totalprice = item.Amount * item.addtocart;
          this.totalPrice = this.totalPrice + item.totalprice;
          this.addedItems.push(item);
        } else {
          this.noItems.push(item);
        }
      });
    } else {
      this.addedItems = [];
    }
  }

  placeOrder() {
    const restuarant = JSON.parse(sessionStorage.getItem('SELECTED_REST'));
    const tableDetails = JSON.parse(sessionStorage.getItem('TABLE_BOOKING'));
      const bookingJson = {
        restaurantId: restuarant.RestaurantId,
        cartItems: this.addedItems,
        tableDetails: tableDetails,
        firstName: tableDetails.firstName,
        lastName: tableDetails.lastName,
        mobileNumber: sessionStorage.getItem('mobile'),
        userId: sessionStorage.getItem('userId')
      };

    console.log('bookingJson', bookingJson);
  }

}
