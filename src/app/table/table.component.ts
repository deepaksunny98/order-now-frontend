import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableList = [];
  guests = [];
  timeList = [];
  minDate = new Date();

  constructor(private fb: FormBuilder, private router: Router) { }
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
    this.tableList = [
      {tableNo: 1, tableSize: 5, status: 'RES', },
    ];
    this.guests = [
     {number: 4}, {number: 6}, {number: 8}, {number: 10}, {number: 12}, {number: 14}, {number: 20}
    ];
    this.timeList = [
      {time: '12:00 PM'}, {time: '12:30 PM'},  {time: '01:00 PM'}, {time: '01:30 PM'}, {time: '02:00 PM'}, 
      {time: '02:30 PM'}, {time: '03:00 PM'}, {time: '03:30 PM'}, {time: '07:00 PM'}, {time: '07:30 PM'},
      {time: '08:00 PM'}, {time: '08:30 PM'}, {time: '09:00 PM'}, {time: '09:30 PM'}, {time: '10:00 PM'},
      {time: '10:30 PM'}, {time: '11:00 PM'}
    ];
  }

  validateBookingdata(value) {
    console.log('data', value);
    const restaurantDetails = JSON.parse(sessionStorage.getItem('SELECTED_REST'));
    this.router.navigate(['/restaurant/' + restaurantDetails.RestaurantId]);
  }

}
