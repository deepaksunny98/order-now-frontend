import { Component, OnInit } from '@angular/core';
import { MenuListService } from './menu-list.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getMenu(restaurantId).then((res: any[]) => {
      if (res.length !== 0) {
        res.map(menu => {
          menu.addtocart = 0;
        });
        this.menuItems = res;
      } else {
        this.noMenu = true;
      }
    });
  }
  addItem(item) {
    console.log('item', item);
    this.menuItems.map(rest => {
      if (rest.MenuId === item.MenuId) {
        item.addtocart = (item.addtocart) ? item.addtocart + 1 : 1;
      }
    });
  }
  removeItem(item) {
    this.menuItems.map(rest => {
      if (rest.MenuId === item.MenuId) {
        item.addtocart = (item.addtocart) ? item.addtocart - 1 : 0;
      }
    });
  }
  addToCart() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.menuItems));
    this.router.navigate(['cart']);
    console.log('list restaurents', this.menuItems);
  }
}
