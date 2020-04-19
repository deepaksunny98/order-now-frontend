import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableList = [];
  guests: any;
  timeList = [];
  minDate = new Date();

  constructor(private fb: FormBuilder, private router: Router, private service: TableService) { }
  tableBookingForm = this.fb.group({
    // date: ['', Validators.required],
    people: ['', Validators.required],
    // time: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  });
  ngOnInit() {
    const restaurantDetails = JSON.parse(sessionStorage.getItem('SELECTED_REST'));
    this.service.getFreeTablesByRestId(restaurantDetails.RestaurantId).then(res => {
      this.guests = res;
    });
  }

  validateBookingdata(value) {
    console.log('data', value);
    const restaurantDetails = JSON.parse(sessionStorage.getItem('SELECTED_REST'));
    this.router.navigate(['/restaurant/' + restaurantDetails.RestaurantId]);
  }

}
