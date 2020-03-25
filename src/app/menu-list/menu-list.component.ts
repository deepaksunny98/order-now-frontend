import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  listRestuarent: any = [];
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

  constructor(private service: LoginService) {}

  ngOnInit() {
    this.service.getRestaurents().then(res => {
      if (res) {
        this.listRestuarent = res;
      }
      this.listRestuarent = this.listRestuarent.map((data, i) => {
        data.name = `menu ${i}`;
        return data;
      });
    });
  }
}
