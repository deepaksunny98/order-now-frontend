import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuListService {
  constructor(private http: HttpClient) {}

  getMenu(restaurantId: number) {
    return this.http
      .get(
        `${environment.apiUrl}/admin/getMenubyRestaurantId?restaurantId=${restaurantId}`
      )
      .toPromise();
  }
}
