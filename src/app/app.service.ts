import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginInput } from './models/LoginInput.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(Mobile: string) {
    return this.http.post(`${environment.apiUrl}/customer/login`, { Mobile });
  }

  sendOtp(data) {
    console.log('sendOtpsendOtpsendOtp', data);
    const url = environment.otpUrl;
    return this.http.post(url, data).toPromise();
  }

  placeOrder(bookingJson) {
    return this.http.post(`${environment.apiUrl}/customer/booking`, bookingJson);
  }

  getRestaurents() {
    return this.http
      .get(`${environment.apiUrl}/customer/getRestaurants`)
      .toPromise();
  }
}
