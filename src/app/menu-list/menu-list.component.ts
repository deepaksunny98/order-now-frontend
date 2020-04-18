import { Component, OnInit } from '@angular/core';
import { MenuListService } from './menu-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  menuItems: any[] = [];
  noMenu = false;

  constructor(
    private service: MenuListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getMenu(restaurantId).then((res: any[]) => {
      if (res.length !== 0) {
        this.menuItems = res;
      } else {
        this.noMenu = true;
      }
    });
  }
}
