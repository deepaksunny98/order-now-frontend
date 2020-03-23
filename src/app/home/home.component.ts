import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: LoginService) { }
  listRestuarent: any;
  ngOnInit() {
    this.getAllRestaurents();
  }

  getAllRestaurents() {
    this.service.getRestaurents().then(res => {
      if (res)  {
        this.listRestuarent = res;
      }
    });
  }


}
