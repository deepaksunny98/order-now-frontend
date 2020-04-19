import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Order Now';
  login: string;

  constructor() {}
  ngOnInit(): void {
    this.login = sessionStorage.getItem('LoggedIn');
    // this.webSocketService.emit('SendOrder', {restaurantId: sessionStorage.getItem('restaurantId'), orderDetails: 'Icecream'});
  }
}

