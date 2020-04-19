import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) { }
  listRestuarent: any;
  ngOnInit() {
    sessionStorage.setItem('LoggedIn', 'true');
    this.getAllRestaurents();
  }

  getAllRestaurents() {
    this.service.getRestaurents().then(res => {
      if (res)  {
        this.listRestuarent = res;
      }
    });
  }

  navigateToTableBooking(rest) {
    sessionStorage.setItem('SELECTED_REST', JSON.stringify(rest));
    this.router.navigate(['table']);
  }


}
