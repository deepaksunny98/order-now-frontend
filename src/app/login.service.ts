import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sendOtp(data) {
    console.log('sendOtpsendOtpsendOtp', data);
    const url = environment.otpUrl;
    return this.http.post(url, data).toPromise();
  }
  getRestaurents() {
    return this.http
      .get(`${environment.apiUrl}/customer/getRestaurants`)
      .toPromise();
  }
}
