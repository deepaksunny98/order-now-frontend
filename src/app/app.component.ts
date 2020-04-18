import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Order Now';

  constructor(private readonly webSocketService: WebSocketService) {}
  ngOnInit(): void {
    this.webSocketService.listen('OrderSent').subscribe((data) => {
      console.log('reply from socket -> ', data);
    });
    this.webSocketService.emit('SendOrder', {restaurantId: 'bcd', orderDetails: 'Icecream'});
  }
}
