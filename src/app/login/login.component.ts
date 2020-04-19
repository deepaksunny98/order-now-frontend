import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { LoginInterface } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  otp_screen = false;
  error = false;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    mobileNumber: ['', [Validators.required]],
  });
  otpForm = this.fb.group({
    otp: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
  });

  loginData: any;
  ngOnInit() {
    sessionStorage.clear();
  }

  login(number) {
    this.loginData = {
      Message: Math.floor(1000 + Math.random() * 9000).toString(),
      PhoneNumber: number.mobileNumber,
    };
    this.service.sendOtp(this.loginData).then((res) => {
      if (res) {
        this.otp_screen = true;
      } else {
        this.error = true;
      }
    });
  }

  validateOtp(res) {
    console.log(res);
    if (+res.otp === +this.loginData.Message) {
      this.service.login(this.loginData.PhoneNumber).subscribe((jwt: any) => {
        const decoded: LoginInterface = jwt_decode(jwt.token);
        sessionStorage.setItem('userId', decoded.UserId.toString());
        sessionStorage.setItem('firstName', decoded.FirstName);
        sessionStorage.setItem('lastName', decoded.LastName);
        sessionStorage.setItem('mobile', decoded.Mobile);
        sessionStorage.setItem('token', jwt.token);
        this.router.navigateByUrl('home');
      });
    } else {
      this.error = true;
    }
  }
}
