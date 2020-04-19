import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getFreeTablesByRestId(restaurantId: number) {
    return this.http
    .get(
      `${environment.apiUrl}/customer/freeTablesListByRestId?restaurantId=${restaurantId}`
    )
    .toPromise();
}
}
