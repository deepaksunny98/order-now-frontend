import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(   private http: HttpClient) { }


  sendOtp(data) {
    console.log('sendOtpsendOtpsendOtp', data);
    const url = 'https://901vs5nlpl.execute-api.us-east-1.amazonaws.com/dev/otp';
    return  this.http.post(url, data).toPromise();
    }
    getRestaurents() {
      return this.http.get('http://15.222.239.16:3000/admin/getRestaurants').toPromise();
    }
}
